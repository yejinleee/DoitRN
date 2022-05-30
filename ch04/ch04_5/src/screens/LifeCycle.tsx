import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import {useLayout} from '../hooks';

export default function LifeCycle() {
  const [layout, setLayout] = useLayout();
  return (
    <View onLayout={setLayout} style={[styles.view]}>
      <Text style={[styles.text]}>LifeCycle</Text>
      <Text> layout : {JSON.stringify(layout, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue900},
  text: {fontSize: 30, color: 'white'},
});
