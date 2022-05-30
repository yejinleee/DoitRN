import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import MainNavigator from './src/screens/MainNavigator';

//prettier-ignore
export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <MainNavigator />
    </SafeAreaView>
  );
}
//prettier-ignore
const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  topBar: {flexDirection: 'row', flexWrap: 'wrap', padding: 5, justifyContent: 'space-between', backgroundColor: Colors.lightBlue500},
  button: {fontSize: 20, color: 'white'},
});
