import React, {useState, useCallback, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from 'react-native-paper';
import { useTimeout, useToggle } from '../hooks';

export default function Timer() {
  // const [loading, setLoading] = useState(true);
  // const toggleLoading = useCallback(() => setLoading((loading) => !loading), []);
  // useEffect(() => {
  //   const id = setTimeout(() => setLoading(false), 3000);
  //   return () => clearTimeout(id);
  // }, [loading]); //여기까지 기존버전

  const [loading, toggleLoading] = useToggle(true);
  useTimeout(() => loading && toggleLoading, 3000, [loading]);
  // loading값이 의존성이 되야하는데 그냥 ,[loading]을 주면 무한히 반복하는 문제가 생김
  // loading값이 true일 때만 toggleLoading을 호출하도록 설정

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>Timer</Text>
      <Text>loading : {loading.toString()}</Text>
      <Button
        onPress={toggleLoading}
        title={loading ? 'stop loading' : 'start loading'}
      />
      {loading && (
        <ActivityIndicator size="large" color={Colors.deepPurple700} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    backgroundColor: Colors.blue900,
  },
  text: {fontSize: 30, color: 'white'},
});
