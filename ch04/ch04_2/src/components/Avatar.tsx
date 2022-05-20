import React from 'react';
import type {FC} from 'react';
import {Image} from 'react-native';
import {TouchableView} from './TouchableView';
import type {StyleProp, ImageStyle} from 'react-native';
import type {TouchableViewProps} from './TouchableView';

{/* 
<Avatar uri={person.avatar} size={50} viewStyle={styles.avatar} onPress={onPress}> */}

export type AvatarProps = TouchableViewProps & {
  uri: string;
  size: number;
  imageStyle?: StyleProp<ImageStyle>;
};

//prettier-ignore
export const Avatar:FC<AvatarProps> = ({uri, size, imageStyle, ...touchableViewProps}) => {
  return (
    <TouchableView {...touchableViewProps}>
      <Image source={{uri}} style={[imageStyle, {width: size, height: size, borderRadius: size/2}]} />
    </TouchableView>
  );
};
