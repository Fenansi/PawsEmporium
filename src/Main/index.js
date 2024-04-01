import React, { useEffect }  from 'react'
import { Text, View,Platform } from 'react-native'
import { Login } from '../Login';
import SplashScreen from 'react-native-splash-screen';
import Try from '../Login/try';
import Products from '../Products';
import Product from '../product';
import Navigator from '../Navigator';

export const Main=()=> {
    if(Platform.OS=='android'){

        useEffect(()=>{
          SplashScreen.hide();
        },[])
      }
  // return <Login/>
  // return <Try/>
  return <Navigator/>
  
}
