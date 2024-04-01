import React, { useEffect }  from 'react'
import { Text, View,Platform } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import Navigator from '../Navigator';

export const Main=()=> {
    

  useEffect(()=>{
    SplashScreen.hide();
  },[])
      
  
  return <Navigator/>
  
}
