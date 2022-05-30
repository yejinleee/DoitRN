import React, {useState, useCallback, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text, Button} from 'react-native';
import {Colors} from 'react-native-paper';

export default function Timer() {
  const [loading, setLoading] = useState(true);
  const toggleLoading = useCallback(() => setLoading((loading) => !loading), []);
  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(id);
  }, [loading]);

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
