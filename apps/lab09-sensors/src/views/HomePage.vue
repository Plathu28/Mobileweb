<template>
  <ion-page>
    <ion-header class="app-header">
      <div class="header-inner">
        <span class="header-logo">⚡</span>
        <span class="header-title">ARM WORKOUT</span>
        <div class="status-pill" :class="state?.status === 'RUNNING' ? 'status-pill--on' : 'status-pill--off'">
          <span class="status-dot"></span>
          {{ statusLabel }}
        </div>
      </div>
    </ion-header>

    <ion-content :scroll-y="true" class="app-content">
      <div class="screen">

        <!-- ===== MAIN VIEW ===== -->
        <div class="workout">

          <!-- Big rep ring -->
          <div class="rep-wrap">
            <svg class="rep-ring-svg" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" class="ring-bg"/>
              <circle cx="100" cy="100" r="90" class="ring-fg"
                :stroke-dasharray="CIRCUMFERENCE"
                :stroke-dashoffset="progressOffset"
                :class="{ 'ring-pulse': isRunning }"
              />
            </svg>
            <div class="rep-inner">
              <div class="rep-count" :class="{ 'rep-bump': repBump }">
                {{ state?.repDisplay ?? 0 }}
              </div>
              <div class="rep-unit">/ {{ TARGET_REPS }} ครั้ง</div>
            </div>
          </div>

          <!-- Score bar -->
          <div class="score-bar">
            <span class="score-bar__label">SCORE</span>
            <span class="score-bar__value">{{ state?.stats.score ?? 0 }}</span>
            <span class="score-bar__sep">|</span>
            <span class="score-bar__label">OK</span>
            <span class="score-bar__ok">{{ state?.stats.repsOk ?? 0 }}</span>
          </div>

          <!-- Feedback -->
          <div class="feedback-area">
            <div class="feedback-msg" :class="feedbackClass" v-if="state?.stats.lastMessage">
              <span class="feedback-icon">{{ feedbackIcon }}</span>
              <span>{{ state.stats.lastMessage }}</span>
            </div>
            <div class="feedback-msg feedback--hint" v-else-if="!isRunning">
              กด START เพื่อเริ่มออกกำลังกาย
            </div>
            <div class="feedback-msg feedback--hint" v-else>
              แกว่งแขนขึ้น-ลงในแนวตั้ง
            </div>
          </div>

          <!-- Accelerometer panel -->
          <div class="accel-panel">
            <div class="accel-panel__header">
              <span class="accel-panel__icon">📡</span>
              <span class="accel-panel__title">ACCELEROMETER</span>
            </div>
            <div class="accel-axes">
              <div class="accel-axis-row" v-for="ax in axes" :key="ax.key">
                <span class="accel-axis__label" :style="{ color: ax.color }">{{ ax.label }}</span>
                <div class="accel-track">
                  <div class="accel-center-line"></div>
                  <div class="accel-bar accel-bar--neg"
                    :style="{ width: negPct(state?.accel?.[ax.rawKey] ?? 0) + '%', background: ax.color }"
                  ></div>
                  <div class="accel-bar accel-bar--pos"
                    :style="{ width: posPct(state?.accel?.[ax.rawKey] ?? 0) + '%', background: ax.color }"
                  ></div>
                </div>
                <span class="accel-axis__val" :style="{ color: ax.color }">
                  {{ fmt(state?.accel?.[ax.rawKey] ?? 0) }}
                </span>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="btn-row">
            <button class="btn-main btn-main--start"
              :class="{ disabled: isRunning }"
              :disabled="isRunning"
              @click="handleStart"
            >▶ START</button>
            <button class="btn-main btn-main--stop"
              :class="{ disabled: !isRunning }"
              :disabled="!isRunning"
              @click="handleStop"
            >■ STOP</button>
          </div>

        </div>

        <div class="footer-info">673380218-7 นายธนกฤต จิตจักร์</div>

      </div>
    </ion-content>

    <!-- ===== FINISHED OVERLAY ===== -->
    <div class="summary-overlay" v-if="state?.status === 'FINISHED'">
      <div class="summary-backdrop"></div>
      <div class="summary-card">
        <div class="summary__trophy">🏆</div>
        <p class="summary__label">ผลการฝึก</p>
        <div class="summary__score">{{ state?.stats.score }}</div>
        <p class="summary__sublabel">คะแนนรวม</p>

        <div class="summary__stats">
          <div class="stat-pill-box stat-pill-box--green">
            <span class="stat-pill-box__num">{{ state?.stats.repsOk }}</span>
            <span class="stat-pill-box__lbl">✅ ถูกต้อง</span>
          </div>
          <div class="stat-pill-box stat-pill-box--red">
            <span class="stat-pill-box__num">{{ state?.stats.repsBad }}</span>
            <span class="stat-pill-box__lbl">❌ พลาด</span>
          </div>
          <div class="stat-pill-box stat-pill-box--blue">
            <span class="stat-pill-box__num">{{ ((state?.stats.avgRepMs ?? 0) / 1000).toFixed(1) }}s</span>
            <span class="stat-pill-box__lbl">⏱ เฉลี่ย</span>
          </div>
        </div>

        <button class="btn-restart" @click="handleStart">🔄 เริ่มใหม่อีกครั้ง</button>
      </div>
    </div>

  </ion-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { IonPage, IonHeader, IonContent } from "@ionic/vue";
import { ArmWorkoutEngine } from "../core/ArmWorkoutEngine";
import type { WorkoutState } from "../core/types";

const engine = new ArmWorkoutEngine();
const state = ref<WorkoutState | null>(null);
const repBump = ref(false);

const TARGET_REPS = 10;
const CIRCUMFERENCE = 2 * Math.PI * 90; // 565.48

onMounted(() => {
  engine.onChange((s) => {
    if (s.stats.repsTotal > (state.value?.stats.repsTotal ?? 0)) {
      repBump.value = true;
      setTimeout(() => (repBump.value = false), 300);
    }
    state.value = s;
  });
});

async function handleStart() { await engine.start(); }
async function handleStop()  { await engine.stop(); }

const isRunning = computed(() => state.value?.status === "RUNNING");

const statusLabel = computed(() => {
  switch (state.value?.status) {
    case "RUNNING":  return "กำลังบันทึก";
    case "FINISHED": return "เสร็จสิ้น";
    default:         return "พร้อมเริ่ม";
  }
});

const progressOffset = computed(() => {
  const reps = state.value?.repDisplay ?? 0;
  const pct = Math.min(reps / TARGET_REPS, 1);
  return CIRCUMFERENCE - pct * CIRCUMFERENCE;
});

const feedbackClass = computed(() => {
  const msg = state.value?.stats.lastMessage;
  if (!msg || msg === "OK") return "feedback--hint";
  return "feedback--warn";
});
const feedbackIcon = computed(() => {
  const msg = state.value?.stats.lastMessage;
  if (!msg) return "";
  return msg === "OK" ? "✓" : "⚠️";
});

// Accel helpers — เพื่อนใช้ AccelSample (ax/ay/az) ตรงๆ
const axes = [
  { key: 'x', rawKey: 'ax' as const, label: 'X', color: '#f87171' },
  { key: 'y', rawKey: 'ay' as const, label: 'Y', color: '#4ade80' },
  { key: 'z', rawKey: 'az' as const, label: 'Z', color: '#60a5fa' },
];
const MAX_G = 10;
const fmt     = (v: number) => (v >= 0 ? '+' : '') + v.toFixed(2);
const posPct  = (v: number) => v > 0 ? Math.min((v / MAX_G) * 100, 100) : 0;
const negPct  = (v: number) => v < 0 ? Math.min((-v / MAX_G) * 100, 100) : 0;
</script>

<style scoped>
/* ── TOKENS ── */
.app-content {
  --c-bg:      #0a0e14;
  --c-surface: #111820;
  --c-border:  #1e2a38;
  --c-accent:  #00e676;
  --c-text:    #e8f0f8;
  --c-muted:   #4a6080;
  --c-red:     #f87171;
  --c-blue:    #60a5fa;
  --r:         16px;
  --background: #0a0e14;
}

/* ── HEADER ── */
.app-header {
  background: #0a0e14;
  border-bottom: 1px solid #1e2a38;
}
.header-inner {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
}
.header-logo { font-size: 1.2rem; }
.header-title {
  flex: 1;
  font-family: 'Courier New', monospace;
  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.15em;
  color: #00e676;
}

/* Status pill in header */
.status-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 14px;
  border-radius: 999px;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .06em;
  border: 1px solid #1e2a38;
  color: #4a6080;
}
.status-pill--on  { border-color: rgba(0,230,118,.5); color: #00e676; }
.status-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: currentColor;
}
.status-pill--on .status-dot { animation: pulse 1s infinite; }

/* ── LAYOUT ── */
.screen {
  min-height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  background: #0a0e14;
}
.workout {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

/* ── REP RING ── */
.rep-wrap {
  position: relative;
  width: 200px; height: 200px;
  flex-shrink: 0;
}
.rep-ring-svg {
  width: 100%; height: 100%;
  transform: rotate(-90deg);
}
.ring-bg {
  fill: none;
  stroke: #1e2a38;
  stroke-width: 7;
}
.ring-fg {
  fill: none;
  stroke: #00e676;
  stroke-width: 7;
  stroke-linecap: round;
  transition: stroke-dashoffset .5s cubic-bezier(.4,0,.2,1);
}
.ring-fg.ring-pulse {
  filter: drop-shadow(0 0 8px rgba(0,230,118,.6));
}
.rep-inner {
  position: absolute;
  inset: 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
}
.rep-count {
  font-size: 4.5rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: #e8f0f8;
  line-height: 1;
  transition: transform .15s ease;
}
.rep-count.rep-bump { transform: scale(1.15); }
.rep-unit { font-size: .8rem; color: #4a6080; margin-top: 4px; }

/* ── SCORE BAR ── */
.score-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #111820;
  border: 1px solid #1e2a38;
  border-radius: 12px;
  padding: 10px 18px;
  width: 100%;
  max-width: 340px;
  box-sizing: border-box;
}
.score-bar__label { font-size: .7rem; letter-spacing: .12em; color: #4a6080; font-family: monospace; }
.score-bar__value { font-size: 1.5rem; font-weight: 900; font-family: 'Courier New', monospace; color: #00e676; }
.score-bar__sep   { color: #1e2a38; margin: 0 4px; }
.score-bar__ok    { font-size: 1.5rem; font-weight: 900; font-family: 'Courier New', monospace; color: #4ade80; }

/* ── FEEDBACK ── */
.feedback-area {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 340px;
  min-height: 40px;
}
.feedback-msg {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: .9rem;
  font-weight: 600;
  animation: fadeIn .25s ease;
}
.feedback--hint { background: rgba(255,255,255,.03); color: #4a6080; border: 1px solid #1e2a38; }
.feedback--warn { background: rgba(248,113,113,.08); color: #f87171; border: 1px solid rgba(248,113,113,.25); }
.feedback-icon  { font-size: .9rem; }

/* ── ACCEL PANEL ── */
.accel-panel {
  width: 100%;
  max-width: 340px;
  background: #111820;
  border: 1px solid #1e2a38;
  border-radius: var(--r, 16px);
  padding: 14px 16px;
  box-sizing: border-box;
}
.accel-panel__header {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 12px;
}
.accel-panel__icon  { font-size: .9rem; }
.accel-panel__title {
  font-size: .68rem; letter-spacing: .15em;
  color: #4a6080; font-family: monospace; font-weight: 700;
}
.accel-axes { display: flex; flex-direction: column; gap: 10px; }
.accel-axis-row { display: flex; align-items: center; gap: 10px; }
.accel-axis__label {
  font-family: 'Courier New', monospace;
  font-weight: 800; font-size: .9rem;
  width: 14px; text-align: center;
}
.accel-track {
  flex: 1; height: 10px;
  background: #0d1420;
  border-radius: 5px;
  position: relative; overflow: hidden;
}
.accel-center-line {
  position: absolute; left: 50%; top: 0; bottom: 0;
  width: 1px; background: #1e2a38; z-index: 1;
}
.accel-bar {
  position: absolute; top: 0; bottom: 0;
  border-radius: 5px;
  transition: width .07s linear;
  opacity: .85;
}
.accel-bar--pos { left: 50%; }
.accel-bar--neg { right: 50%; }
.accel-axis__val {
  font-family: 'Courier New', monospace;
  font-size: .75rem; width: 52px; text-align: right;
}

/* ── BUTTONS ── */
.btn-row {
  display: flex; gap: 10px;
  width: 100%; max-width: 340px;
}
.btn-main {
  flex: 1; padding: 14px;
  border-radius: 12px; border: none;
  font-weight: 800; font-size: .9rem; letter-spacing: .08em;
  cursor: pointer;
  transition: opacity .15s, transform .1s;
}
.btn-main:active:not(.disabled) { transform: scale(.97); }
.btn-main.disabled { opacity: .3; pointer-events: none; }
.btn-main--start {
  background: #00e676; color: #000;
  box-shadow: 0 0 20px rgba(0,230,118,.3);
}
.btn-main--stop {
  background: transparent; color: #f87171;
  border: 1px solid #f87171;
}

/* ── FOOTER ── */
.footer-info {
  text-align: center;
  padding: 16px 0 8px;
  font-size: .7rem;
  color: #4a6080;
  font-family: monospace;
}

/* ── SUMMARY OVERLAY ── */
.summary-overlay {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  animation: fadeIn .3s ease;
}
.summary-backdrop {
  position: absolute; inset: 0;
  background: rgba(0,0,0,.8);
  backdrop-filter: blur(8px);
}
.summary-card {
  position: relative;
  width: 100%; max-width: 320px;
  background: #111820;
  border: 1px solid #1e2a38;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  animation: slideUp .4s cubic-bezier(.16,1,.3,1);
  display: flex; flex-direction: column; align-items: center; gap: 6px;
}
.summary__trophy  { font-size: 3rem; }
.summary__label   { color: #4a6080; font-size: .8rem; letter-spacing: .1em; text-transform: uppercase; }
.summary__score   {
  font-size: 5.5rem; font-weight: 900;
  font-family: 'Courier New', monospace;
  color: #00e676; line-height: 1;
  text-shadow: 0 0 40px rgba(0,230,118,.4);
}
.summary__sublabel { color: #4a6080; font-size: .75rem; margin-bottom: 8px; }

.summary__stats { display: flex; gap: 10px; margin: 8px 0 16px; }
.stat-pill-box {
  display: flex; flex-direction: column; align-items: center;
  padding: 12px 16px; border-radius: 14px;
  border: 1px solid #1e2a38; background: #0a0e14;
  min-width: 76px;
}
.stat-pill-box--green { border-color: rgba(74,222,128,.3); }
.stat-pill-box--red   { border-color: rgba(248,113,113,.3); }
.stat-pill-box--blue  { border-color: rgba(96,165,250,.3); }
.stat-pill-box__num { font-size: 1.6rem; font-weight: 800; font-family: 'Courier New', monospace; color: #e8f0f8; }
.stat-pill-box__lbl { font-size: .65rem; color: #4a6080; margin-top: 2px; }

.btn-restart {
  margin-top: 4px;
  padding: 13px 36px;
  border-radius: 999px; border: none;
  background: #00e676; color: #000;
  font-weight: 800; font-size: .95rem; letter-spacing: .05em;
  cursor: pointer;
  box-shadow: 0 0 24px rgba(0,230,118,.35);
}
.btn-restart:active { transform: scale(.97); }

/* ── ANIMATIONS ── */
@keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pulse   { 0%,100% { opacity: 1; } 50% { opacity: .3; } }
</style>