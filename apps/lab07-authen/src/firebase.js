import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // เพิ่มบรรทัดนี้เพื่อใช้งานระบบ Login

// ค่า Config ของคุณ
const firebaseConfig = {
  apiKey: "AIzaSyAbuOZ_qX2jltF4N3UFUiQTCMRmIJpxjQc",
  authDomain: "lab06-expense-134f0.firebaseapp.com",
  projectId: "lab06-expense-134f0",
  storageBucket: "lab06-expense-134f0.firebasestorage.app",
  messagingSenderId: "121972935627",
  appId: "1:121972935627:web:1fa609d1d4d109af2dc44e",
  measurementId: "G-45S0KJ3KYL"
};

// 1. เริ่มต้น Firebase
export const app = initializeApp(firebaseConfig);

// 2. เตรียมตัวแปร auth ไว้ใช้สำหรับการ Login/Logout
export const auth = getAuth(app);