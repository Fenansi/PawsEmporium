package com.pawsemporium

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.ReactRootView
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import org.devio.rn.splashscreen.SplashScreen

class MainActivity : ReactActivity(), DefaultHardwareBackBtnHandler {
  
    override fun onCreate(savedInstanceState: Bundle?) {
        SplashScreen.show(this) // Show splash screen
        super.onCreate(savedInstanceState)
    }

    override fun getMainComponentName(): String {
        return "PawsEmporium"
    }

    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return object : ReactActivityDelegate(this, mainComponentName) {
            override fun createRootView(): ReactRootView {
                return ReactRootView(this@MainActivity)
            }
        }
    }
    
    override fun onBackPressed() {
        // Handle back button press if needed
        super.onBackPressed()
    }
}
