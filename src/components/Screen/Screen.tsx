// @ts-nocheck
import * as React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants';
import { ScreenProps } from './Screen.props';

const ScrollContainer = React.forwardRef((props, ref) => {
  return (
    <ScrollView
      ref={ref}
      style={[{ flex: 1 }, props.style]}
      showsVerticalScrollIndicator={false}
      bounces={false}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {props.children}
    </ScrollView>
  );
});

function ScreenComponent(props: ScreenProps) {
  const insets = useSafeAreaInsets();
  const {
    topSafe,
    bottomSafe,
    scrollRef,
    horizontal = null,
    top = 0,
    bottom = 0,
    color = colors.background,
    scrollable,
    backgroundImage,
    style,
    keyboardOffset = 0,
    keyboardAvoid = true,
  } = props;

  const paddingTop = topSafe ? Math.max(insets.top, top) : top;
  const paddingBottom = bottomSafe ? Math.max(insets.bottom, bottom) : bottom;

  const customStyle = {
    paddingTop,
    paddingBottom,
    backgroundColor: color,
    paddingHorizontal: horizontal,
  };

  const renderScrollView = (
    <ScrollContainer ref={scrollRef} style={{ backgroundColor: color }}>
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={[styles.container, customStyle, style, styles.backgroundImage]}
        >
          {props.children}
        </ImageBackground>
      ) : (
        <View style={[styles.container, customStyle, style]}>
          {props.children}
        </View>
      )}
    </ScrollContainer>
  );
  const renderDefaultView = backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={[styles.container, customStyle, style, styles.backgroundImage]}
    >
      {props.children}
    </ImageBackground>
  ) : (
    <View style={[styles.container, customStyle, style]}>{props.children}</View>
  );
  const ScreenTypes = {
    scrollable: renderScrollView,
    default: renderDefaultView,
  };

  if (keyboardAvoid)
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardOffset}
        style={{ flex: 1 }}
      >
        {scrollable ? ScreenTypes.scrollable : ScreenTypes.default}
      </KeyboardAvoidingView>
    );

  return (
    <View style={{ flex: 1 }}>
      {scrollable ? ScreenTypes.scrollable : ScreenTypes.default}
    </View>
  );
}

export default function Screen({ ...props }: ScreenProps) {
  return <ScreenComponent {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
});
