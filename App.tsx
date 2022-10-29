/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren } from 'react';
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
import { BiomsIcon } from './src/constants/images';
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
  ]);


  const handleVoice = () => null

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{ flex: 1, backgroundColor: backgroundStyle.backgroundColor, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={handleVoice}>
          <BiomsIcon width={100} height={100} fill={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default App;
