import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {Colors} from 'react-native-paper';
import * as D from '../data';
import {useAsync} from '../hooks';
import Country from './Country';

export type CountryProps = {
  country: D.ICountry;
};

export default function Fetch() {
  const [countries, setCountries] = useState<D.ICountry[]>([]);
  const [error, resetError] = useAsync(async () => {
    setCountries([]);
    resetError();
    // await Promise.reject(new Error('some erorr occurs')); //주석 제거하면 Error 타입 객체가 reject되는 경우를 볼 수 있음
    const countries = await D.getCountries();
    setCountries(countries);
  });

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Fetch</Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Country country={item} />}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue100},
  title: {fontSize: 30, fontWeight: '400'},
  separator: {borderBottomColor: Colors.blue50, borderBottomWidth: 1},
});
