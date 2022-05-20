import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Colors} from 'react-native-paper';
import {createOrUse} from './createOrUse';
import * as D from '../data';
import Color from 'color';
import Person from './Person';

const title = 'Cache';

export default function Cache() {
  const people = createOrUse('people', () => {
    //컴포넌트 내에서 지역변수로 구현!
    D.makeArray(2).map(D.createRandomPerson);
  });
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
    borderColor: Color(Colors.green500).lighten(0.5).string(),
  },
});
