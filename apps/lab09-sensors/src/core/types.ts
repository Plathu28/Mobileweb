export interface AccelSample {
  ax: number;
  ay: number;
  az: number;
  t: number;
}

export interface WorkoutStats {
  repsTotal: number;
  repsOk: number;
  repsBad: number;
  score: number;
  avgRepMs: number;
  lastMessage?: string;
}

export interface WorkoutState {
  status: "IDLE" | "CALIBRATING" | "RUNNING" | "STOPPED" | "FINISHED";
  repDisplay: number;
  stats: WorkoutStats;
  accel?: AccelSample;
}
