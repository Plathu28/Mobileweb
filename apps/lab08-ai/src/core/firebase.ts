import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; // นำเข้า analytics เผื่อไว้ใช้ในอนาคต

// นำ Config ของคุณมาใส่ตรงนี้
const firebaseConfig = {
  apiKey: "AIzaSyA3eiH5zNFY5KHoCkX7hz01I8HO864NyGs",
  authDomain: "lab06-expense-134f0.firebaseapp.com",
  projectId: "lab06-expense-134f0",
  storageBucket: "lab06-expense-134f0.firebasestorage.app",
  messagingSenderId: "121972935627",
  appId: "1:121972935627:web:228dbc5048bbe7f92dc44e",
  measurementId: "G-S1S73R6R5P"
};

// เติม export หน้า const app เพื่อให้ไฟล์ gemini.service.ts ดึงไปใช้งานได้
export const app = initializeApp(firebaseConfig);

// ฐานข้อมูล Firestore ที่โจทย์ให้สร้าง
export const db = getFirestore(app);

// ถ้าต้องการใช้งาน analytics ให้ใส่ไว้แบบนี้ครับ
export const analytics = getAnalytics(app);