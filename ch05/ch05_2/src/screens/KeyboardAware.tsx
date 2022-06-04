import React, {useCallback, useRef, useState, useMemo} from 'react';
//prettier-ignore
import {View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Keyboard, Platform} from 'react-native';
import {findNodeHandle} from 'react-native';
import type {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTheme} from 'react-native-paper';
import * as D from '../data';

export default function KeyboardAware() {
  const [person, setPerson] = useState<D.IPerson[]>([D.createRandomPerson()]);
  const {dark, colors} = useTheme();

  const textInputRef = useRef<TextInput | null>(null);
  const setFocus = useCallback(
    () => textInputRef.current?.focus(),
    [textInputRef.current]);
  const textInputStyle = useMemo(
    () => [
      styles.textInput,
      {color: colors.text, borderColor: colors.placeholder},
    ],
    [colors.text, colors.placeholder],
  );
  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);
  const scrollToInput = (reactNode: any) => {
    scrollViewRef.current?.scrollToFocusedInput(reactNode);
    // scrollFocusedInput : ref로 포커스된 textInput을 수직방향 스크롤을 통해 항상 화면에 나타나도록 함
  };
  const autoFocus = useCallback(
    () => (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      scrollToInput(findNodeHandle(event.target));
    },
    [],
  );
  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
        <View style={{flex: 1}} />
      </View>
      <KeyboardAwareScrollView
        ref={scrollViewRef}
        contentContainerStyle={[styles.flex]}>
        <View style={[{flex: 1}]} />
        {/* flex:1 즉 남은 화면 전체를 차지하는 컴포거가 있기 때문에 아래의 인풋 컴포들은 젤 아래로 밀린다 */}
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.text}]}>email</Text>
          <TextInput
            ref={textInputRef}
            style={textInputStyle}
            onFocus={autoFocus}
            value={person.email}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, email}))}
          />
        </View>
        <View style={[styles.textView]}>
          <Text style={[styles.text, {color: colors.text}]}>name</Text>
          <TextInput
            ref={textInputRef}
            style={textInputStyle}
            onFocus={autoFocus}
            value={person.name}
            placeholder="enter your email"
            onChangeText={email => setPerson(person => ({...person, name}))}
          />
        </View>
      </KeyboardAwareScrollView>
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
  textInput: {fontSize: 24, borderRadius: 5},
  flex: {flex: 1},
});
