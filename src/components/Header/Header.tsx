import { StyleSheet, View, type ViewProps } from 'react-native';
import React from 'react';
import Text from '../Text';
import { colors } from '../../constants';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const spacing = {
  small: 6,
  medium: 10,
  large: 15,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.medium,
    paddingBottom: spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  leftContainer: {},
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
});

interface ScreenHeaderProps extends ViewProps {
  title?: string;
  description?: string;
  topSafe?: boolean;
  border?: boolean;
  color?: string;
  borderColor?: string;
  titleProps?: React.ComponentProps<typeof Text>;
  descriptionProps?: React.ComponentProps<typeof Text>;
  renderRight?: () => React.ReactNode;
  renderLeft?: () => React.ReactNode;
}

const ScreenHeader = ({
  style,
  renderLeft,
  renderRight,
  title = 'app_name',
  description,
  titleProps,
  descriptionProps,
  topSafe,
  border = true,
  borderColor,
  color = colors.background,
}: ScreenHeaderProps) => {
  const insets = useSafeAreaInsets();

  const paddingTop = topSafe ? insets.top + spacing.small : 0;
  const customStyle = { paddingTop, backgroundColor: color };
  const borderStyle = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: borderColor ?? colors.primary,
  };

  return (
    <View style={[styles.container, customStyle, border && borderStyle, style]}>
      <View style={styles.leftContainer}>
        {renderLeft ? renderLeft?.() : null}
      </View>

      <View>
        <Text text={title} fontWeight={'bold'} {...titleProps} />
        {!!description && <Text text={description} {...descriptionProps} />}
      </View>

      <View style={styles.rightContainer}>{renderRight?.()}</View>
    </View>
  );
};

export default ScreenHeader;
