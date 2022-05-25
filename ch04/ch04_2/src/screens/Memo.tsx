import React, {useMemo} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Colors} from 'react-native-paper';
import color from 'color';
import * as D from '../data';
import Person from './Person';
import {useClock} from '../hooks/useClock';

const title = 'Memo';
export default function Memo() {
  const time = useClock();
  const people = useMemo(
    //createOrUse함수 대신 리액트제공 useMemo훅 사용!!
    () => D.makeArray(2).map(D.createRandomPerson),
    [
      // time //이부분을 주석 처리 한다면 time은 1초마다 변하니까 이 콜백함수가 1초마다 재실행 됨.
    ],
  );
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>{title}</Text>
      <FlatList
        style={[styles.flatList]}
        data={people}
        renderItem={({item}) => <Person person={item} />}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, padding: 5, backgroundColor: Colors.blue900},
  text: {fontSize: 20, color: 'white'},
  flatList: {width: '100%'},
  itemSeparator: {
    borderWidth: 1,
    borderColor: color(Colors.grey500).lighten(0.5).string(),
  },
});
