import React from 'react';
import 'react-native-gesture-handler'; // 네이티브 모듈에서 동작하는 진화된 PanResponder 역할
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context'; //아이폰 화면에서 텍스트가 정상적인 위치에 오지 않는 문제 해결
import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './src/screens/MainNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
