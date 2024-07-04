import { type LegacyRef } from 'react';
import {
  type ImageSourcePropType,
  ScrollView,
  type ViewStyle,
} from 'react-native';
export interface ScreenProps {
  children?: React.ReactNode;
  style?: ViewStyle;

  /*
   * Screen background color
   * Default value if it's a safe screen 'white' otherwise 'background'
   */
  color?: string;

  scrollable?: boolean; // Wrap content inside ScrollView? Defaults to false.
  scrollRef?: LegacyRef<ScrollView>; // ScrollView ref

  topSafe?: boolean; // Wrap content inside SafeAreaView? Defaults to false.
  bottomSafe?: boolean; // Wrap content inside SafeAreaView? Defaults to false.
  horizontal?: number; // Horizontal Padding
  top?: number; // Padding top
  bottom?: number; // Padding bottom

  keyboardOffset?: number;
  /*
   * Pass this to show a background Image
   */
  backgroundImage?: ImageSourcePropType;

  /*
   * Pass this as false to not use keyboard avoiding view
   * By default it's true
   */
  keyboardAvoid?: boolean;

  keyboardAvoidBehaviour?: 'height' | 'position' | 'padding' | null;
}
