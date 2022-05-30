import React from 'react';
import type {FC, ComponentProps} from 'react';
import {Text} from 'react-native';
import type {StyleProp, TextStyle} from 'react-native';
import {TouchableView} from './TouchableView';
import type {TouchableViewProps} from './TouchableView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconTextProps = TouchableViewProps &
  ComponentProps<typeof Icon> & {
    text: number | string;
    textStyle: StyleProp<TextStyle>;
  };

//prettier-ignore
export const IconText: FC<IconTextProps> = ({
    name, size, color, textStyle, text, ...touchableViewProps }) => {
        return (
            <TouchableView {...touchableViewProps}>
                <Icon name={name} size={size} color={color} />
                <Text style={textStyle}>{text}</Text>
            </TouchableView>
        )
    }