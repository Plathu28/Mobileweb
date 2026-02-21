<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Lab08: Gemini Vision</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <input ref="fileEl" type="file" accept="image/*" hidden @change="onFileChange" />

      <ion-button expand="block" color="light" @click="fileEl?.click()" class="ion-margin-bottom">
        อัปโหลดไฟล์ภาพ
      </ion-button>
      <ion-button expand="block" color="secondary" @click="onTakePhoto" class="ion-margin-bottom">
        ถ่ายภาพ (Camera)
      </ion-button>

      <div v-if="previewUrl" style="text-align: center; margin: 20px 0;">
        <ion-img :src="previewUrl" style="max-height: 300px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
      </div>

      <ion-button expand="block" :disabled="!img || loading" @click="onAnalyze">
        วิเคราะห์ภาพด้วย Gemini AI
      </ion-button>

      <div v-if="loading" style="text-align: center; margin-top: 20px;">
        <ion-spinner name="crescent"></ion-spinner>
        <p>AI กำลังวิเคราะห์รูปภาพ...</p>
      </div>

      <ion-card v-if="result" style="margin: 20px 0;">
        <ion-card-header>
          <ion-card-title>ผลการวิเคราะห์</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p style="font-size: 1.1em; margin-bottom: 15px;">
            <strong>รายละเอียด:</strong> {{ result.caption }}
          </p>

          <div style="margin-bottom: 15px;">
            <strong>คีย์เวิร์ด:</strong><br>
            <ion-badge 
              color="tertiary" 
              v-for="tag in result.tags" 
              :key="tag" 
              style="margin-right: 5px; margin-top: 5px; font-weight: normal;"
            >
              {{ tag }}
            </ion-badge>
          </div>

          <div v-if="result.objects && result.objects.length > 0" style="margin-bottom: 15px;">
            <strong>วัตถุที่ตรวจพบ:</strong>
            <ion-list lines="none" style="margin-top: 5px; border-radius: 8px; background: var(--ion-color-light);">
              <ion-item v-for="obj in result.objects" :key="obj.name" color="light">
                <ion-label>
                  <h3>{{ obj.name }}</h3>
                  <p v-if="obj.confidence">ความแม่นยำ: {{ (obj.confidence * 100).toFixed(0) }}%</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>

          <div v-if="result.safety">
            <ion-badge :color="result.safety.isSensitive ? 'danger' : 'success'">
              {{ result.safety.isSensitive ? '⚠️ ภาพเนื้อหาอ่อนไหว' : '✅ ภาพปลอดภัย' }}
            </ion-badge>
            <p v-if="result.safety.notes" style="color: var(--ion-color-danger); font-size: 0.9em; margin-top: 5px;">
              {{ result.safety.notes }}
            </p>
          </div>

        </ion-card-content>
      </ion-card>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
// นำเข้า UI Components เพิ่มเติมเพื่อเอามาจัดหน้าตา
import {
  IonButton, IonContent, IonHeader, IonImg, IonPage, IonSpinner, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonBadge, IonList, IonItem, IonLabel
} from "@ionic/vue";
import { PhotoService } from "../core/photo.service";
import { GeminiVisionService } from "../core/gemini.service";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";

const fileEl = ref<HTMLInputElement | null>(null);
const img = ref<Base64Image | null>(null);
const previewUrl = ref("");
const result = ref<ImageAnalysisResult | null>(null);
const loading = ref(false);

async function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;
  img.value = await PhotoService.fromFile(file);
  previewUrl.value = URL.createObjectURL(file);
  result.value = null;
}

async function onTakePhoto() {
  loading.value = true;
  try {
    const b64 = await PhotoService.fromCamera();
    img.value = b64;
    previewUrl.value = `data:${b64.mimeType};base64,${b64.base64}`;
    result.value = null;
  } catch (error) {
    console.error("Camera error:", error);
  } finally {
    loading.value = false;
  }
}

async function onAnalyze() {
  if (!img.value) return;
  loading.value = true;
  try {
    result.value = await GeminiVisionService.analyze(img.value);
  } catch (error) {
    console.error("Analysis error:", error);
    alert("เกิดข้อผิดพลาดในการวิเคราะห์ภาพ โปรดลองอีกครั้ง");
  } finally {
    loading.value = false;
  }
}
</script>