/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  Platform,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Main } from './src/Main';

const App=()=>{

  return <GestureHandlerRootView>
    <Main/>
    </GestureHandlerRootView>
}
export default App;
