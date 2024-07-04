import React from 'react';
import {
  type Insets,
  Text as ReactNativeText,
  type TextStyle,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../constants';
import type { TextProps as RNTextProps } from './Text.props';

interface TextProps extends RNTextProps {
  hitSlop?: Insets;
}
export default function Text(props: TextProps) {
  // grab the props
  const {
    center,
    text,
    children,
    style: styleOverride,
    containerStyle,
    touchable,
    underline,
    hitSlop,
    allowFontScaling = false,
    maxCharacterLength,
    top,
    bottom,
    left,
    right,
    fontWeight,
    fontSize,
    ...rest
  } = props;
  let { color = colors.text } = props;

  // figure out which content to use
  const content = text || children;

  const truncatedContent =
    typeof content === 'string' &&
    maxCharacterLength &&
    content.length > maxCharacterLength
      ? content.slice(0, maxCharacterLength) + '...'
      : content;

  const customStyle: TextStyle = {
    textAlign: center ? 'center' : 'left',
    textDecorationLine: underline ? 'underline' : 'none',
    marginTop: top ?? undefined,
    marginBottom: bottom ?? undefined,
    marginLeft: left ?? undefined,
    marginRight: right ?? undefined,
    fontWeight,
    fontSize,
    color,
  };

  const style = [customStyle, styleOverride];

  if (touchable) {
    return (
      <TouchableOpacity
        hitSlop={hitSlop}
        onPress={props?.onPress}
        style={containerStyle}
      >
        <ReactNativeText
          {...rest}
          style={style}
          allowFontScaling={allowFontScaling}
        >
          {truncatedContent}
        </ReactNativeText>
      </TouchableOpacity>
    );
  }
  return (
    <ReactNativeText {...rest} style={style}>
      {truncatedContent}
    </ReactNativeText>
  );
}
