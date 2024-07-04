import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  type TextStyle,
  type GestureResponderEvent,
  type ViewStyle,
  type TouchableHighlightProps,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { colors } from '../../constants';
import Text from '../Text';
const { width } = Dimensions.get('screen');

export interface Props extends TouchableHighlightProps {
  variant?: keyof typeof variants;
  color?: string;
  disabledColor?: string;
  contentColor?: string;
  disabledTextColor?: string;
  borderColor?: string;
  loading?: boolean;
  text?: string;
  children?: React.ReactNode;
  textStyle?: TextStyle;
  flex?: boolean;
  small?: boolean;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  LeftIcon?: (props: {
    color: string;
    style: ViewStyle;
  }) => React.FunctionComponentElement<any>;
  RightIcon?: (props: {
    color: string;
    style: ViewStyle;
  }) => React.FunctionComponentElement<any>;
}

const spacing = {
  small: 6,
  medium: 10,
  large: 15,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 8,
  },
  smallContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small,
    borderRadius: 10,
    maxWidth: width * 0.2,
  },
  buttonTextStyle: {
    textAlign: 'center',
  },
});

const variants = {
  primary: {
    textColor: colors.buttonText,
    backgroundColor: colors.primary,
    disabledTextColor: colors.mutedText,
    disabledBackgroundColor: colors.muted,
  },
  secondary: {
    textColor: colors.buttonText,
    backgroundColor: colors.secondary,
    disabledTextColor: colors.mutedText,
    disabledBackgroundColor: colors.muted,
  },
  text: {
    textColor: colors.text,
    backgroundColor: colors.transparent,
    disabledTextColor: colors.mutedText,
    disabledBackgroundColor: colors.transparent,
  },
  outline: {
    textColor: colors.text,
    backgroundColor: colors.transparent,
    disabledTextColor: colors.mutedText,
    disabledBackgroundColor: colors.transparent,
    borderColor: colors.text,
    mutedBorderColor: colors.mutedText,
  },
};

export default function Button(props: Props) {
  const {
    variant = 'primary',
    color,
    disabledColor,
    contentColor,
    disabledTextColor,
    textStyle,
    loading,
    text,
    children,
    style,
    flex = false,
    LeftIcon,
    RightIcon,
    small,
    top,
    bottom,
    left,
    right,
    ...rest
  } = props;

  const V = variants[variant];
  const _backgroundColor = props.disabled
    ? disabledColor || V.disabledBackgroundColor
    : color || V.backgroundColor;
  const _textColor = props.disabled
    ? disabledTextColor || V.disabledTextColor
    : contentColor || V.textColor;

  const content = children || (
    <Text
      style={[styles.buttonTextStyle, textStyle]}
      color={_textColor}
      text={text}
    />
  );
  const customStyle: ViewStyle = {
    flex: flex ? 1 : 0,
    backgroundColor: _backgroundColor,
    marginTop: top ?? undefined,
    marginBottom: bottom ?? undefined,
    marginLeft: left ?? undefined,
    marginRight: right ?? undefined,
    borderWidth: variant === 'outline' ? StyleSheet.hairlineWidth : undefined,
    borderColor: variant === 'outline' ? _textColor : undefined,
  };

  const Component = variant === 'text' ? TouchableOpacity : TouchableOpacity;
  return (
    // @ts-ignore
    <Component
      style={[
        styles.container,
        small && styles.smallContainer,
        customStyle,
        style,
      ]}
      activeOpacity={0.5}
      {...rest}
    >
      {/* {loading ? (
        <ActivityIndicator color={_textColor} />
      ) : ( */}
      <>
        {LeftIcon && (
          <LeftIcon
            color={_textColor}
            style={{ marginRight: spacing.medium }}
          />
        )}
        {content}
        {RightIcon && (
          <RightIcon
            color={_textColor}
            style={{ marginLeft: spacing.medium }}
          />
        )}
        {loading && (
          <ActivityIndicator
            style={{ marginLeft: spacing.small }}
            color={_textColor}
          />
        )}
      </>
      {/* )} */}
    </Component>
  );
}
