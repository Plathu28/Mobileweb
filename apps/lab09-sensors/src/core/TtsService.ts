import { TextToSpeech } from "@capacitor-community/text-to-speech";

export class TtsService {
  async speak(text: string) {
    try {
      await TextToSpeech.speak({
        text,
        lang: "en-US", // ลองใช้ภาษาอังกฤษทดสอบก่อน
        rate: 1.0,
      });
    } catch (error: any) {
      // วิชาสายดาร์ก: ให้มือถือเด้งป๊อปอัปฟ้อง Error ออกมาเลย!
      alert("พังที่ระบบเสียง!: " + JSON.stringify(error) + " | " + error);
    }
  }

  async stop() {
    await TextToSpeech.stop();
  }
}