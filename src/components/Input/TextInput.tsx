import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  type ViewStyle,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  TextInput as RNTextInput,
  type TextInputProps,
  Pressable,
} from 'react-native';
import { colors } from '../../constants/colors';
import Text, { type TextProps } from '../Text';

const spacing = {
  small: 6,
  medium: 10,
  large: 15,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: spacing.small,
  },
  inputContainer: {
    borderColor: colors.muted,
    backgroundColor: colors.InputBackground,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: spacing.small,
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  focusedContainer: {
    backgroundColor: colors.background,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color: colors.text,
    padding: 0,
    // textAlignVertical: 'top',
    fontSize: 14,
  },
  disabledInput: {
    color: colors.mutedText,
  },
  multilineInput: {
    textAlignVertical: 'top',
    height: 'auto',
    minHeight: 70,
  },
  itemsCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export interface Props extends TextInputProps {
  title?: string;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  isStyledFocus?: boolean;
  inputRef?: any;
  pressable?: boolean;
  onPress?: () => void;
  editable?: boolean;
  titleProps?: TextProps;
  nextInputRef?: React.MutableRefObject<RNTextInput | undefined>;
  renderLeftAccessory?: () => React.ReactNode;
  renderRightAccessory?: () => React.ReactNode;
  Component?: typeof RNTextInput;
}

export default function TextInput(props: Props) {
  const [focused, setFocused] = useState(!!props.autoFocus);

  const {
    title,
    placeholder,
    containerStyle,
    inputContainerStyle,
    isStyledFocus = true,
    renderLeftAccessory,
    renderRightAccessory,
    style,
    inputRef,
    onBlur,
    onFocus,
    nextInputRef,
    pressable,
    onPress,
    titleProps,
    editable = true,
    returnKeyType = nextInputRef ? 'next' : undefined,
    Component = RNTextInput,
    onSubmitEditing = nextInputRef
      ? () => {
          nextInputRef?.current?.focus();
        }
      : undefined,
    ...rest
  } = props;

  const handleFocus = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setFocused(true);
    onFocus?.(event);
  };
  const handleBlur = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setFocused(false);
    onBlur?.(event);
  };

  const focusedContainerStyle = isStyledFocus && [styles.focusedContainer];
  let Wrapper = useCallback(
    // @ts-ignore
    (viewProps) => {
      if (pressable) {
        return (
          <Pressable onPress={onPress} {...viewProps}>
            <>{viewProps.children}</>
          </Pressable>
        );
      } else return <View {...viewProps} />;
    },
    [pressable, onPress]
  );

  return (
    <Wrapper style={[styles.container, containerStyle]}>
      {title ? (
        <View style={styles.titleContainer}>
          <Text
            text={title}
            allowFontScaling={false}
            fontWeight={'600'}
            // fontSize={}
            {...titleProps}
          />
        </View>
      ) : null}
      <View
        style={[
          styles.inputContainer,
          focused && focusedContainerStyle,
          props.multiline && styles.multilineInput,
          inputContainerStyle,
        ]}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.itemsCenter}>
            {renderLeftAccessory?.()}
            <Component
              ref={inputRef}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholderTextColor={colors.mutedText}
              placeholder={placeholder}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              allowFontScaling={false}
              editable={editable}
              {...rest}
              style={[styles.input, !editable && styles.disabledInput, style]}
            />
          </View>
        </View>

        {renderRightAccessory?.()}
      </View>
    </Wrapper>
  );
}
