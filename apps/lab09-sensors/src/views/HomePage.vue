<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Lab09 Sensors</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding ion-text-center">
      
      <div v-if="state?.status === 'STOPPED'">
        <ion-card color="light">
          <ion-card-header>
            <ion-card-title style="font-size: 1.6rem;">💪 สรุปผลการฝึก</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <h1 style="font-size: 4rem; color: var(--ion-color-primary); margin: 10px 0;">
              {{ state?.stats.score }}
            </h1>
            <p style="font-size: 1.2rem; margin-bottom: 20px;">คะแนนรวมของคุณ</p>
            
            <ion-list lines="full">
              <ion-item>
                <ion-label>ทำถูกต้อง (Reps OK)</ion-label>
                <ion-note slot="end" color="success" style="font-size: 1.2rem;">
                  <b>{{ state?.stats.repsOk }}</b>
                </ion-note>
              </ion-item>
              <ion-item>
                <ion-label>ทำพลาด (Reps Bad)</ion-label>
                <ion-note slot="end" color="danger" style="font-size: 1.2rem;">
                  <b>{{ state?.stats.repsBad }}</b>
                </ion-note>
              </ion-item>
              <ion-item>
                <ion-label>ความเร็วเฉลี่ย</ion-label>
                <ion-note slot="end" style="font-size: 1.2rem;">
                  <b>{{ ((state?.stats.avgRepMs ?? 0) / 1000).toFixed(2) }}s</b>
                </ion-note>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>

        <ion-button expand="block" shape="round" color="secondary" @click="start" style="margin-top: 25px;">
          เริ่มฝึกใหม่อีกครั้ง
        </ion-button>
      </div>

      <div v-else>
        <div v-if="state?.status === 'RUNNING'">
          <h2 style="color: var(--ion-color-success);">🏃‍♂️ กำลังจับเวลา...</h2>
        </div>
        <div v-else>
          <h2>กด Start เพื่อเริ่ม</h2>
        </div>

        <h1 style="font-size: 5rem; margin: 20px 0;">{{ state?.repDisplay ?? 0 }}</h1>
        <p style="font-size: 1.5rem; font-weight: bold;">คะแนน: {{ state?.stats.score ?? 0 }}</p>

        <p v-if="state?.stats.lastMessage && state.stats.lastMessage !== 'OK'" 
           style="color: var(--ion-color-danger); font-size: 1.2rem;">
          ⚠️ {{ state?.stats.lastMessage }}
        </p>
        <p v-else style="color: gray;">
          แกว่งแขนขึ้น-ลงในแนวตั้ง
        </p>

        <div style="margin-top: 40px;">
          <ion-button expand="block" @click="start" :disabled="state?.status === 'RUNNING'">
            Start
          </ion-button>
          <ion-button expand="block" color="danger" @click="stop" :disabled="state?.status !== 'RUNNING'">
            Stop
          </ion-button>
        </div>
      </div>
    </ion-content>

    <ion-footer class="ion-padding ion-text-center">
      <p>673380260-8 นายเมธัส ผดุงพงษ์</p>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">

import { ref, onMounted, onUnmounted, watch } from "vue";
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonButton, IonFooter,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, // เพิ่มพวกนี้
  IonList, IonItem, IonLabel, IonText 
} from "@ionic/vue";

// Import Services
import { MotionService } from "../core/MotionService";
import { TtsService } from "../core/TtsService";
import { HapticsService } from "../core/HapticsService"; // เพิ่ม Haptics
import { ArmWorkoutEngine } from "../core/ArmWorkoutEngine";
import type { WorkoutState } from "../core/types";

const state = ref<WorkoutState | null>(null);

// สร้าง Instances
const engine = new ArmWorkoutEngine();
const motion = new MotionService();
const tts = new TtsService();
const haptics = new HapticsService(); 

onMounted(() => {
  engine.onChange((s) => (state.value = s));
});

// --- ความเจ๋งอยู่ตรงนี้: ใช้ watch เพื่อดักจับคะแนนและสั่งให้เครื่องสั่น ---

// 1. ดักจับเมื่อได้คะแนน (repsOk เพิ่มขึ้น)
watch(
  () => state.value?.stats.repsOk,
  async (newVal, oldVal) => {
    if (newVal !== undefined && oldVal !== undefined && newVal > oldVal) {
      await haptics.success(); // สั่นแบบสำเร็จ
    }
  }
);

watch(
  () => state.value?.stats.repsBad,
  async (newVal, oldVal) => {
    if (newVal !== undefined && oldVal !== undefined && newVal > oldVal) {
      await haptics.warning(); // สั่นเตือน (ยังต้องมี await เพื่อให้มันสั่นให้เสร็จ)
      // ให้พูดบอกด้วยว่าผิดตรงไหน (เอา await ออกเหมือนกับข้างล่าง)
      if (state.value?.stats.lastMessage) {
        tts.speak(state.value.stats.lastMessage).catch(e => console.log(e));
      }
    }
  }
);

async function start() {
  // สั่งแค่ engine อย่างเดียวพอ เพราะใน engine.start() มันสั่ง motion ให้เราแล้ว
  await engine.start(); 
}

async function stop() {
  await motion.stop();
  engine.stop();
  const finalScore = state.value?.stats.score ?? 0;
  
  // สั่งพูดตอนจบ (เอา await ออกเช่นกัน)
  tts.speak(`ออกกำลังกายเสร็จสิ้น! ได้คะแนน ${finalScore}`).catch(e => console.log(e));
}

// หยุดเซนเซอร์ทันทีที่ผู้ใช้กดออกจากหน้านี้ (ป้องกันกินแบต)
onUnmounted(() => {
  stop();
});
</script>