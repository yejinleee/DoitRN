import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import * as D from '../data';

export default function Input() {
  const [person, setPerson] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const {dark, colors} = useTheme();
  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.textButton]}>focus</Text>
        <Text style={[styles.textButton]}>dismiss keyboard</Text>
        <View style={{flex: 1}} />
      </View>
      <View style={[styles.textView]}>
        <Text style={[styles.text, {color: colors.text}]}>email</Text>
        <TextInput
          style={[
            styles.textInput,
            {color: colors.text, borderColor: colors.placeholder},
          ]}
          value={person.email}
          placeholder="enter your email"
          onChangeText={email => setPerson(person => ({...person, email}))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {flex: 1},
  topBar: {flexDirection: 'row', padding: 5},
  textButton: {marginRight: 10, fontSize: 20},
  keyboardAvoidingView: {flex: 1, padding: 10},
  textView: {padding: 5},
  text: {fontSize: 24},
  textInput: {fontSize: 24, borderWith: 1, borderRadius: 5},
});
