import React, {useCallback, useRef, useState} from 'react';
//prettier-ignore
import {View, Text, StyleSheet, KeyboardAvoidingView, Keyboard, Platform} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import * as D from '../data';

export default function KeyboardAvoid() {
  const [person, setPerson] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const {dark, colors} = useTheme();

  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(
    () => textInputRef.current?.focus(),
    [textInputRef.current],
  );
  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
        <View style={{flex: 1}} />
      </View>
      <KeyboardAvoidingView
        style={[styles.flex]}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={[{flex: 1}]} />
        {/* flex:1 즉 남은 화면 전체를 차지하는 컴포거가 있기 때문에 아래의 인풋 컴포들은 젤 아래로 밀린다 */}
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.text}]}>email</Text>
          <TextInput
            style={[
              styles.textInput,
              {color: colors.text, borderColor: colors.placeholder},
            ]}
            ref={textInputRef}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
      </KeyboardAvoidingView>
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
  flex: {flex: 1},
});
