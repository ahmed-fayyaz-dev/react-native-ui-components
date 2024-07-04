import type {
  TextProps as TextProperties,
  GestureResponderEvent,
  ViewProps,
} from 'react-native';

export interface TextProps extends TextProperties {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  containerStyle?: ViewProps['style'];

  /*
   * pass a limit to truncated text upto limit
   */
  maxCharacterLength?: number;

  color?: string;

  touchable?: boolean;
  center?: boolean;
  fontSize?: number | undefined;

  /**
   * Specifies font weight. The values 'normal' and 'bold' are supported
   * for most fonts. Not all fonts have a variant for each of the numeric
   * values, in that case the closest one is chosen.
   */
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | 'ultralight'
    | 'thin'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semibold'
    | 'condensedBold'
    | 'condensed'
    | 'heavy'
    | 'black'
    | undefined /**
   * This will put line under the text.
   */;
  underline?: boolean;

  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;

  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
