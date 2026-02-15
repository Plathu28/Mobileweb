package cpkku.metus.lab07;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.google.firebase.FirebaseApp;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        // 1. ปลุก Firebase ก่อนเป็นอย่างแรก! (ย้ายมาไว้บนสุด)
        FirebaseApp.initializeApp(this);

        // 2. ค่อยสั่งให้ Capacitor ทำงาน
        super.onCreate(savedInstanceState);
    }
}