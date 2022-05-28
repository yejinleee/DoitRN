import React, {FC, useCallback, useState} from 'react';
import {Text, View, Image, Alert} from 'react-native';
import * as D from '../data';
import {styles} from './Person.style';
import moment from 'moment-with-locales-es6';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, IconText} from '../components';

moment.locale('ko');

export type PersonProps = {
  person: D.IPerson;
};

// prettier-ignore
const Person: FC<PersonProps> = ({person: initialPerson}) => {
  const avatarPressed = useCallback(() => Alert.alert('avatar pressed'),[]);
  const deletePressed = useCallback(() => Alert.alert('delete pressed'),[]);

  const [person, setPerson] = useState<D.IPerson>({
    ...initialPerson,
    counts: {comment: 0, retweet: 0, heart: 0}
  });

  const commentIconPresed = useCallback(() => setPerson(person => ({
    ...person,
    counts: {
      ...person.counts,
      comment: person.counts.comment + 1,
    },
  })),[]);
  const retweetIconPresed = useCallback(() => setPerson(person => ({
    ...person,
    counts: {
      ...person.counts,
      retweet: person.counts.retweet + 1,
    },
  })),[]);
  const heartIconPresed = useCallback(() => setPerson(person => ({
    ...person,
    counts: {
      ...person.counts,
      heart: person.counts.heart + 1,
    },
  })),[]);

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={initialPerson.avatar} size={50} onPress={avatarPressed} />
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createdDate).startOf('day').fromNow()}
          </Text>
          <Icon name="trash-can-outline" size={26} color={Colors.lightBlue500} onPress={deletePressed} />
        </View>
        <Text numberOfLines={3} ellipsizeMode="tail" style={[styles.text, styles.comments]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{uri: person.image}} />
        <View style={[styles.nameEmailView]}>
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
      </View>
    </View>
  );
};

export default Person;
