import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import Cache from './src/screens/Cache';
import Fibo from './src/screens/Fibo';
import Memo from './src/screens/Memo';

const {width} = Dimensions.get('window');
const numberOfComponents = 3;

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        horizontal
        contentContainerStyle={[styles.contentContainerStyles]}>
        <Cache />
        <Memo />
        <Fibo />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  contentContainerStyles: {width: width * numberOfComponents},
  safeAreaView: {flex: 1},
});
