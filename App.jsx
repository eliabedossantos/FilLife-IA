import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from "native-base";

import React, { useEffect } from 'react';

import './src/util';
// import './services';

import {Routes} from './src/Routes';
import {storeWrapper} from './src/redux';
import {Provider} from 'react-redux';
// import { useFonts, Libre_Baskerville_500Medium } from '@expo-google-fonts/libre-baskerville';
// import * as SplashScreen from 'expo-splash-screen';




// SplashScreen.preventAutoHideAsync();


const MyApp = () => {
  // const [fontsLoaded] = useFonts({
  //   Libre_Baskerville_500Medium,
  // });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }




  return (
    <Provider store={storeWrapper}>
      {global.alerta.statusBar()}
      <NativeBaseProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          // translucent
        />
        <Routes />
      </NativeBaseProvider>
    </Provider>
  );

};
export default MyApp;
