import React, {useMemo, useState} from 'react';
import type {FC} from 'react';
//prettier-ignore
import {SafeAreaView, StyleSheet, FlatList, View, ScrollView, Dimensions, Text} from 'react-native';
import {Colors} from 'react-native-paper';
import PersonUsingValueState from './src/screens/PeresonUsingValueState';
import PeresonUsingObjectState from './src/screens/PeresonUsingObjectState';
import PeresonUsingPassingState from './src/screens/PersonUsingPassingState';
import * as D from './src/data';
import TopBar from './src/screens/TopBar';

const {width} = Dimensions.get('window');

type PersonInformation = {
  title: string,
  Component: FC<any>
};

const personInformation: PersonInformation[] = [
  {title: 'PersonUsingValueState', Component: PersonUsingValueState},
  {title: 'PeresonUsingObjectState', Component: PeresonUsingObjectState},
  {title: 'PeresonUsingPassingState', Component: PeresonUsingPassingState},
];
const numberOfComponents = personInformation.length;

//prettier-ignore
export default function App() {
  // const people = useMemo(() => D.makeArray(10).map(D.createRandomPerson),[]);
  const [people, setPeople] = useState<D.IPerson[]>([]);
  const children = useMemo(() =>
    personInformation.map(({title, Component}: PersonInformation) => (
      <View style={styles.flex} key={title}>
        <Text style={[styles.text]}>{title}</Text>
        <FlatList data={people}
          renderItem={({item}) => <Component person={item} />}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} />
      </View>
    ))
    , [people]); // deps를 설정해주어야 값이 바뀔때마다 다시 캐시하게 할 수 있음. 교재에선 people.length
    return (
      <SafeAreaView style={styles.flex}>
        <TopBar setPeople={setPeople} />
        <ScrollView horizontal
          contentContainerStyle={styles.horizontalScrollView}>
            {children}
          </ScrollView>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  flex: {flex: 1},
  itemSeparator: {borderWith: 1, borderColor: Colors.grey500},
  horizontalScrollView: {width: width * numberOfComponents},
  text: {fontSize: 24, textAlign: 'center'},
});
