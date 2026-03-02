import type { AccelSample, WorkoutState } from "./types";
import { MotionService } from "./MotionService";
import { TtsService } from "./TtsService";
import { HapticsService } from "./HapticsService";


export class ArmWorkoutEngine {
  private motion = new MotionService();
  private tts = new TtsService();
  private haptic = new HapticsService();

 
  private listeners = new Set<(s: WorkoutState) => void>();

  private phase: "WAIT_UP" | "WAIT_DOWN" = "WAIT_UP";
  private peak = 0;
  private valley = 0;
  private lastRepTime = 0;

  private readonly UP_TH = 2.0;       
  private readonly DOWN_TH = -1.5;    
  private readonly MIN_ROM = 3.0;     
  private readonly MIN_MS = 700;      
  private readonly MAX_MS = 3500;     
  private readonly SIDE_TH = 5.0;    

 
  state: WorkoutState = {
    status: "IDLE",
    repDisplay: 0,
    stats: {
      repsTotal: 0,
      repsOk: 0,
      repsBad: 0,
      score: 0,
      avgRepMs: 0,
    },
  };

  
  onChange(cb: (s: WorkoutState) => void) {
    this.listeners.add(cb);
    cb(this.clone()); 
    return () => this.listeners.delete(cb);
  }


  async start() {
   
    this.state = {
      status: "RUNNING",
      repDisplay: 0,
      stats: { repsTotal: 0, repsOk: 0, repsBad: 0, score: 0, avgRepMs: 0 },
      accel: { ax: 0, ay: 0, az: 0, t: 0 },
    };
    this.phase = "WAIT_UP";
    this.peak = 0;
    this.valley = 0;
    this.lastRepTime = Date.now(); 

    this.emit();

  
    await this.tts.speak("เริ่มกายบริหารแขน ยกขึ้นจนสุดแล้วลดลง");
    await this.motion.start((sample) => this.process(sample));
  }

 
  async stop() {
    await this.motion.stop();
    this.state.status = "STOPPED";
    this.emit();
  }

 
  private process(sample: AccelSample) {
    if (sample.t - (this.state.accel?.t ?? 0) > 100) {
  this.state.accel = sample;
  this.emit();
}
    if (this.state.status !== "RUNNING") return;

    const y = sample.ay;
    const side = Math.abs(sample.ax) + Math.abs(sample.az);

    if (this.phase === "WAIT_UP") {
   
      this.peak = Math.max(this.peak, y);

      if (y > this.UP_TH) {
        this.phase = "WAIT_DOWN";
      }
    } else {
   
      this.valley = Math.min(this.valley, y);

      if (y < this.DOWN_TH) {
        
        this.evaluateRep(sample.t, side);

        
        this.phase = "WAIT_UP";
        this.peak = 0;
        this.valley = 0;
        this.emit();
      }
    }
  }

  private evaluateRep(now: number, side: number) {
    const repMs = now - this.lastRepTime;
    this.lastRepTime = now;
    this.state.stats.repsTotal++;

    const rom = this.peak - this.valley; 

    let ok = true;
    let msg = "OK";

    
    if (rom < this.MIN_ROM) {
      ok = false;
      msg = "ยกแขนต่ำเกินไป";       
    } else if (repMs < this.MIN_MS) {
      ok = false;
      msg = "เร็วเกินไป";            
    } else if (repMs > this.MAX_MS) {
      ok = false;
      msg = "ช้าเกินไป";             
    } else if (side > this.SIDE_TH) {
      ok = false;
      msg = "กรุณายกแนวตั้ง";     
    }

   
    if (ok) {
      this.state.repDisplay++;
      this.state.stats.repsOk++;
      this.state.stats.score++;
      this.state.stats.avgRepMs = Math.round(
        (this.state.stats.avgRepMs + repMs) / 2
      );
      this.haptic.success();  
      this.tts.speak(`${this.state.repDisplay}`);       
    } else {
      this.state.stats.repsBad++;
      this.haptic.warning();
      this.tts.speak(msg);           
    }
    if (this.state.repDisplay >= 10) {
    this.state.stats.lastMessage = "ครบ 10 ครั้ง! เสร็จสิ้น";
    this.tts.speak("ครบ 10 ครั้งแล้ว เสร็จสิ้นการออกกำลังกาย");
    this.motion.stop();
    this.state.status = "FINISHED";
    }

    this.state.stats.lastMessage = msg;

    if (this.state.repDisplay >= 10) {
    this.finish();
    return;  // stop here, finish() handles the rest
}
  }

private async finish() {
  await this.motion.stop();
  this.state.status = "FINISHED";

  const s = this.state.stats;
  const msg = `เสร็จสิ้น ทำได้ ${s.repsOk} ครั้ง จาก ${s.repsTotal} ครั้ง คะแนน ${s.score}`;
  this.state.stats.lastMessage = msg;
  await this.tts.speak(msg);

  this.emit();
}

  private emit() {
    const snap = this.clone();
    this.listeners.forEach((cb) => cb(snap));
  }

  private clone(): WorkoutState {
    return JSON.parse(JSON.stringify(this.state));
  }
}