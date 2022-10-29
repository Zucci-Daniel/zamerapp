/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState, type PropsWithChildren } from 'react';
import {
  LogBox,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from 'react-redux';
import ZACameraScreen from './src/components/ZACameraScreen';
import { RootState } from './src/redux/store';


const App = () => {


  const { name } = useSelector(
    (state: RootState) => state.homeState,
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  LogBox.ignoreLogs([
    'redux-persist failed',
    "Remote debugger is in a background"
  ]);



  return (
    <SafeAreaView style={backgroundStyle}>
      <ZACameraScreen />
    </SafeAreaView>
  );
};


export default App;
