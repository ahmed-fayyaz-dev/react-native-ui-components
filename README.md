```markdown
# React Native TxLabz Components SDK

The `react-native-txlabz-components` SDK provides a set of reusable UI components for React Native applications. This SDK includes components such as `Button`, `Header`, `ProgressiveImage`, `Screen`, `Text`, and `TextInput`.

## Installation

To install the package, use the following command:

```bash
npm install react-native-txlabz-components
```

or

```bash
yarn add react-native-txlabz-components
```

## Components

### Button

A customizable button component with various variants and loading states.

#### Usage

```tsx
import { Button } from 'react-native-txlabz-components';

<Button variant="primary" text="Primary Button" onPress={() => {}} />
<Button text="Button with loader" loading onPress={() => {}} />
<Button 
  text="Button with icon"
  onPress={() => {}}
  LeftIcon={(props) => <Ionicons name="bag-check-outline" size={18} {...props} />}
/>
```

#### Props

```ts
interface Props extends TouchableHighlightProps {
  variant?: 'primary' | 'secondary' | 'text' | 'outline';
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
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  LeftIcon?: (props: { color: string; style: ViewStyle }) => React.FunctionComponentElement<any>;
  RightIcon?: (props: { color: string; style: ViewStyle }) => React.FunctionComponentElement<any>;
}
```

### Text

A text component with various styles and options.

#### Usage

```tsx
import { Text } from 'react-native-txlabz-components';

<Text text="Centered Text" center />
<Text text="Underlined Text" underline />
<Text text="Pressable Text" onPress={() => { Alert.alert('Text pressed'); }} />
```

#### Props

```ts
export interface TextProps extends TextProperties {
  children?: React.ReactNode;
  text?: string;
  containerStyle?: ViewProps['style'];
  maxCharacterLength?: number;
  color?: string;
  touchable?: boolean;
  center?: boolean;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  underline?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}
```

### TextInput

A text input component with support for left and right accessories, multi-line input, and next input ref focus.

#### Usage

```tsx
import { TextInput } from 'react-native-txlabz-components';

<TextInput title="Title" placeholder="Placeholder" />
<TextInput 
  title="With Accessories" 
  placeholder="Placeholder" 
  renderLeftAccessory={() => <Ionicons name="key" size={20} />} 
  renderRightAccessory={() => <Ionicons name="eye-off" size={20} />}
/>
```

#### Props

```ts
interface Props extends TextInputProps {
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
```

### Header

A header component with customizable title, description, and left/right render options.

#### Usage

```tsx
import { Header } from 'react-native-txlabz-components';

<Header 
  title="Header Title" 
  description="Header Description"
  renderLeft={() => <Ionicons name="menu" size={25} color="white" />}
  renderRight={() => <Ionicons name="notifications" size={25} color="white" />}
/>
```

#### Props

```ts
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
```

### ProgressiveImage

An image component with built-in loading and progress indicator support.

#### Usage

```tsx
import { ProgressiveImage } from 'react-native-txlabz-components';

<ProgressiveImage 
  src="https://example.com/image.jpg"
  style={{ height: 200, width: 300 }}
/>
<ProgressiveImage 
  src="https://example.com/image.jpg"
  style={{ height: 200, width: 300 }}
  renderCustomIndicator={(progress) => <Progress.CircleSnail size={50} progress={progress} color="grey" />}
/>
```

#### Props

```ts
interface ProgressiveImageProps extends ImageProps {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ImageStyle>;
  indicatorColor?: string;
  indicatorContainerStyle?: StyleProp<ViewStyle>;
  renderCustomIndicator?: (progress: number, loading: boolean) => React.ReactNode;
}
```

### Screen

A screen component with optional scrollable content.

#### Usage

```tsx
import { Screen } from 'react-native-txlabz-components';

<Screen color="white" scrollable>
  {/* Your content here */}
</Screen>
```

#### Props

```ts
interface ScreenProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  color?: string;
  scrollable?: boolean;
  scrollRef?: LegacyRef<ScrollView>;
  topSafe?: boolean;
  bottomSafe?: boolean;
  horizontal?: number;
  top?: number;
  bottom?: number;
  keyboardOffset?: number;
  backgroundImage?: ImageSourcePropType;
  keyboardAvoid?: boolean;
  keyboardAvoidBehaviour?: 'height' | 'position' | 'padding' | null;
}
```

### VirtualizedScrollContainer

A container component that leverages `FlatList` to virtualize long lists of children components.

#### Usage

```tsx
import VirtualizedScrollContainer from 'react-native-txlabz-components';

<VirtualizedScrollContainer>
  {/* Your components here */}
</VirtualizedScrollContainer>
```

#### Props

```ts
interface VirtualizedListContainerProps<ItemT> extends Omit<FlatListProps<ItemT>, 'data' | 'renderItem'> {
  children: ReactNode;
  style?: FlexStyle;
}
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

You can run the example project using :
```js
yarn example start
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
