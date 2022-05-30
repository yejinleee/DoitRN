import React, {useEffect, useLayoutEffect} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import {Colors} from 'react-native-paper';
import type {LayoutChangeEvent} from 'react-native';

export default function LifeCycle() {
  useEffect(() => {
    console.log(Platform.OS, 'useEffect called');
    return () => console.log(Platform.OS, 'useEffect Finished');
  });
  useLayoutEffect(() => {
    console.log(Platform.OS, 'useLayoutEffect called');
    return () => console.log(Platform.OS, 'useLayoutEffect Finished');
  });
  const onLayout = (e: LayoutChangeEvent) => {
    const {layout} = e.nativeEvent;
    console.log('onLayout : ', layout); // 시작점x,y좌표와 width, height 값을 가짐
  };
  console.log(Platform.OS, 'render start');
  return (
    <View onLayout={onLayout} style={[styles.view]}>
      <Text style={[styles.text]}>LifeCycle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
});
