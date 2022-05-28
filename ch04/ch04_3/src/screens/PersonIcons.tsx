import React, {FC, useCallback, useState} from 'react';
import type {Dispatch, SetStateAction } from 'react';
import {View, Alert} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Colors} from 'react-native-paper';
import {IconText} from '../components';

moment.locale('ko');

export type PersonIconProps = {
  person: D.IPerson;
  setPerson: Dispatch<SetStateAction<D.IPerson>>;
};

// prettier-ignore
const PersonIcons: FC<PersonIconProps> = ({person, setPerson}) => {
  const commentIconPresed = useCallback(() => setPerson((person) => {
    const {comment} = person.counts;
    return {...person, counts: {...person.counts, comment: comment + 1}};
  }),[]);
  const retweetIconPresed = useCallback(() => setPerson(person => {
    const {retweet} = person.counts;
    return {...person, counts: {...person.counts, retweet: retweet + 1}};
  }),[]);
  const heartIconPresed = useCallback(() => setPerson(person => {
    const {heart} = person.counts;
    return {...person, counts: {...person.counts, heart: heart + 1}};
  }),[]);

  return (
    <View style={[styles.countsView]}>
      <IconText viewStyle={[styles.touchableIcon]} onPress={commentIconPresed}
        name="twitter" size={24} color={Colors.purple500}
        textStyle={[styles.iconText]} text={person.counts.comment} />
      <IconText viewStyle={[styles.touchableIcon]} onPress={retweetIconPresed}
        name="twitter" size={24} color={Colors.purple500}
        textStyle={[styles.iconText]} text={person.counts.retweet} />
      <IconText viewStyle={[styles.touchableIcon]} onPress={heartIconPresed}
        name="twitter" size={24} color={Colors.purple500}
        textStyle={[styles.iconText]} text={person.counts.heart} />
    </View>
  );
};

export default PersonIcons;
