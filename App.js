/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useEffect} from 'react';
// import type {PropsWithChildren} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation/RootNavigator';
import SplashScreen from 'react-native-splash-screen';
import {useFocusEffect} from '@react-navigation/native';

export default function App() {
  // useFocusEffect(
  //   useCallback(() => {
  //     SplashScreen.hide();
  //     console.log('mkmkmk');
  //   }, []),
  // );

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
