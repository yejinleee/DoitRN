import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30,
  iconColor = 'white';

const icons = ['home', 'trello', 'unicycle', 'tab']; //본책 예시 - 인식못하는 ..?

export default function BottomBar() {
  //prettier-ignore
  const children = icons.map((name) => (
    <Icon key={name} name={name} size={iconSize} color={iconColor} />
  ));
  return <View style={styles.view}>{children}</View>;
}
const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: Colors.blue900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {fontSize: 20, color: 'white'},
});
