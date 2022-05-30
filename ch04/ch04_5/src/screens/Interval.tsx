import React, {useState, useCallback} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';
import {Avatar} from '../components';
import * as D from '../data';
import {useInterval, useToggle} from '../hooks';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>;

export default function Interval() {
  const [avatars, setAvatars] = useState<IdAndAvatar[]>([]);
  const [start, toggleStart] = useToggle(true);
  const clearAvatars = useCallback(() => setAvatars((notUsed) => []), []);

  //prettier-ignore
  useInterval(() => {
      if (start) {
        setAvatars((avatars) => [
          ...avatars,
          {id: D.randomId(), avatar: D.randomAvatarUrl()}
        ]);
      }
    },1000,[start]);

  const children = avatars.map(({id, avatar}) => (
    <Avatar
      key={id}
      uri={avatar}
      size={70}
      viewStyle={styles.avatarViewStyle}
    />
  ));

  return (
    <View style={styles.view}>
      <View style={styles.topBar}>
        <Text onPress={toggleStart} style={styles.topBarText}>
          {start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatars} style={styles.topBarText}>
          clear Avatars
        </Text>
      </View>
      <Text style={styles.title}>Interval</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {children}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', backgroundColor: Colors.blue900},
  title: {fontSize: 20, fontWeight: '600'},
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  topBarText: {fontSize: 20, color: 'red'},
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatarViewStyle: {padding: 5},
});
