import React, {useRef, useCallback, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import * as D from '../data';
import Person from './Person';

export default function Home() {
  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const add = useCallback(() => {
    setPeople(people => [...people, D.createRandomPerson()]);
  }, []);
  const removeAll = useCallback(() => {
    setPeople(notUsed => []);
  }, []);
  const flatListRef = useRef<FlatList | null>(null);
  const onContentSizeChange = useCallback(
    () => flatListRef.current?.scrollToEnd(),
    [flatListRef.current],
  );
  return (
    <View style={[styles.view]}>
      <View style={[styles.topBar]}>
        <Text onPress={add} style={styles.text}>
          add
        </Text>
        <Text onPress={removeAll} style={styles.text}>
          remove all
        </Text>
        <View style={{flex: 1}} />
      </View>
      <FlatList
        ref={flatListRef}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={item => item.id}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  text: {marginRight: 10, fontSize: 20},
});
