// 1. นำเข้าฟังก์ชันที่จำเป็น (เพิ่ม getFirestore เข้ามา)
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <--- บรรทัดสำคัญที่ต้องเพิ่ม

// 2. ค่า Config ของคุณ (อันเดิม)
const firebaseConfig = {
  apiKey: "AIzaSyAbuOZ_qX2jltF4N3UFUiQTCMRmIJpxjQc",
  authDomain: "lab06-expense-134f0.firebaseapp.com",
  projectId: "lab06-expense-134f0",
  storageBucket: "lab06-expense-134f0.firebasestorage.app",
  messagingSenderId: "121972935627",
  appId: "1:121972935627:web:1fa609d1d4d109af2dc44e",
  measurementId: "G-45S0KJ3KYL"
};

// 3. เริ่มต้น Firebase App
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. เริ่มต้น Database และส่งออกตัวแปร db (สำคัญที่สุดสำหรับ Lab นี้)
export const db = getFirestore(app);