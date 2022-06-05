import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function MainNavigator() {
  return (
    <SafeAreaView style={[styles.view]}>
      <Text>This is top text</Text>
      <Text>This is bottom text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'space-between'},
});
