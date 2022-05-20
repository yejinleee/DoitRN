import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

export default function App() {
  const time = new Date();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString()}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  digitFont: {fontFamily: 'MajorMonoDisplay-Regular', fontWeight: '400'},
  time: {fontSize: 50},
});
