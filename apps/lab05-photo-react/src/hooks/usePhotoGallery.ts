import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { isPlatform } from '@ionic/react'; // เช็คว่ารันบนแพลตฟอร์มไหน
import { Capacitor } from '@capacitor/core'; // ช่วยแปลง path ไฟล์บนมือถือ

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export function usePhotoGallery() {
  const [photos, setPhotos] = useState<UserPhoto[]>([]);
  const PHOTO_STORAGE = 'photos';

  // ส่วนที่ 1: โหลดรูปภาพเก่า
  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Preferences.get({ key: PHOTO_STORAGE });
      const photosInPreferences = (value ? JSON.parse(value) : []) as UserPhoto[];

      // เช็คว่าถ้า "ไม่ใช่" โหมด Hybrid (คือรันบนเว็บ) ให้ทำแบบเดิม (แปลง Base64)
      // แต่ถ้าเป็น Hybrid (มือถือ) ข้ามไปได้เลย เพราะเราเก็บ Path จริงไว้แล้ว
      if (!isPlatform('hybrid')) {
        for (const photo of photosInPreferences) {
          const file = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data,
          });
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
        }
      }

      setPhotos(photosInPreferences);
    };
    loadSaved();
  }, []);

  // ส่วนที่ 2: ถ่ายรูป
  const addNewToGallery = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedImageFile = await savePicture(capturedPhoto, fileName);

    const newPhotos = [savedImageFile, ...photos];
    setPhotos(newPhotos);

    Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) });
  };

  // ส่วนที่ 3: บันทึกรูป (มีการแยก Logic ตาม Platform)
  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string | Blob;

    // ตรวจสอบ Platform
    if (isPlatform('hybrid')) {
      // ถ้าเป็นมือถือ: อ่านไฟล์จาก path เครื่องได้เลย
      const file = await Filesystem.readFile({
        path: photo.path!,
      });
      base64Data = file.data;
    } else {
      // ถ้าเป็นเว็บ: ต้อง fetch แล้วแปลงเป็น blob
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();
      base64Data = (await convertBlobToBase64(blob)) as string;
    }

    // เขียนไฟล์ลงเครื่อง
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    if (isPlatform('hybrid')) {
      // ถ้าเป็นมือถือ: คืนค่า path ที่ Capacitor เข้าถึงได้ (cap://...)
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    } else {
      // ถ้าเป็นเว็บ: คืนค่า path ปกติ
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

  return {
    photos,
    addNewToGallery,
  };
}