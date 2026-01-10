import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import type { Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
// 1. เพิ่ม Imports ที่จำเป็นสำหรับ Mobile
import { isPlatform } from '@ionic/vue';
import { Capacitor } from '@capacitor/core';

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);
  const PHOTO_STORAGE = 'photos';

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // 3. แก้ไข loadSaved: ถ้าเป็น Web เท่านั้นถึงจะแปลงเป็น Base64
    // (ถ้าเป็น Mobile จะข้าม Loop นี้ไปเลย เพราะใช้ Path จริงได้)
    if (!isPlatform('hybrid')) {
      for (const photo of photosInPreferences) {
        const readFile = await Filesystem.readFile({
          path: photo.filepath,
          directory: Directory.Data,
        });
        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }

    photos.value = photosInPreferences;
  };

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string | Blob;

    // 2. แก้ไข savePicture: เช็ค Platform
    if (isPlatform('hybrid')) {
      // ถ้าเป็น Mobile (Hybrid): อ่านไฟล์จาก Path ในเครื่องโดยตรง
      const readFile = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = readFile.data;
    } else {
      // ถ้าเป็น Web: ต้อง Fetch และแปลง Blob เป็น Base64
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }

    // บันทึกไฟล์ลงเครื่อง (เหมือนเดิมทั้ง 2 แบบ)
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      // ถ้าเป็น Mobile: คืนค่า path เป็น file:// โดยใช้ Capacitor.convertFileSrc ช่วยแปลง
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // ถ้าเป็น Web: คืนค่า path เดิม
      return {
        filepath: fileName,
        webviewPath: photo.webPath,
      };
    }
  };

  const convertBlobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
  };

  const addNewToGallery = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    photos.value = [savedImageFile, ...photos.value];
  };

  const cachePhotos = () => {
    Preferences.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(photos.value),
    });
  };

  onMounted(loadSaved);
  watch(photos, cachePhotos);

  return {
    photos,
    addNewToGallery,
  };
};

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}