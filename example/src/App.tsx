import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Button,
  Header,
  ProgressiveImage,
  Screen,
  Text,
  TextInput,
} from 'react-native-txlabz-components';

const useRefs = () => {
  return {
    firstInputRef: React.useRef(),
    secondInputRef: React.useRef(),
  };
};

function ComponentScreen() {
  const refs = useRefs();

  const ButtonsContent = (
    <View style={styles.contentContainer}>
      <Text text="Buttons" center fontWeight={'bold'} />
      <Button variant="primary" text="Primary Button" onPress={() => {}} />
      <Button variant="secondary" text="Secondary Button" onPress={() => {}} />
      <Button text="Disabled Button" disabled onPress={() => {}} />
      <Button variant="text" text="Text Button" onPress={() => {}} />
      <Button variant="text" text="Text Button" onPress={() => {}} disabled />
      <Button variant="outline" text="Outline Button" onPress={() => {}} />
      <Button
        variant="outline"
        text="Outline Button"
        onPress={() => {}}
        disabled
      />
      <Button text="Button with loader" loading onPress={() => {}} />
      <Button text="Button with loader" loading onPress={() => {}} disabled />
      <Button
        text="Button with icon"
        onPress={() => {}}
        LeftIcon={(props) => (
          <Ionicons name="bag-check-outline" size={18} {...props} />
        )}
      />
      <Button
        text="Disabled Button with icon"
        disabled
        onPress={() => {}}
        LeftIcon={(props) => (
          <Ionicons name="bag-check-outline" size={18} {...props} />
        )}
      />
    </View>
  );

  const TextContent = (
    <View style={styles.contentContainer}>
      <Text text="Text" center fontWeight={'bold'} />
      <Text text="Centred" center />
      <Text text="Underlined" underline />
      <Text
        text="Pressable"
        onPress={() => {
          Alert.alert('pressed');
        }}
      />
      <Text maxCharacterLength={40}>
        {'With Truncated limit upto 40. Lorem Ipsum Ipsum Loremm'}
      </Text>
    </View>
  );

  const InputContent = (
    <View style={styles.contentContainer}>
      <Text text="Input" center fontWeight={'bold'} />
      <Text
        text='Input also have next input ref support to focus on next input when completion. To see it in action press "next/return" key'
        center
        top={10}
      />
      <TextInput
        title="Title"
        placeholder="Placeholder"
        inputRef={refs.firstInputRef}
        nextInputRef={refs.secondInputRef}
      />
      <TextInput
        title="2nd Title"
        placeholder="2nd Placeholder"
        inputRef={refs.secondInputRef}
      />
      <Text text="MultiLine input (Enter long text)" center top={10} />
      <TextInput
        title="MultiLine Input"
        multiline
        placeholder="Multiline text"
      />
      <Text text="Left and Right Accessory Support" center top={10} />
      <TextInput
        title="Input Accessory"
        placeholder="PlaceHolder"
        renderRightAccessory={() => <Ionicons name="eye-off" size={20} />}
        renderLeftAccessory={() => (
          <Ionicons name="key" size={20} style={{ marginRight: 10 }} />
        )}
      />
    </View>
  );

  const ImageContent = (
    <View style={styles.contentContainer}>
      <Text text="Images" center fontWeight={'bold'} />
      <Text text="Image With Loader indicator for network images" center />
      <ProgressiveImage
        src={
          'https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
        style={{ height: 200, width: 300 }}
      />
      <Text text="Image With custom Loader indicator" center />
      <ProgressiveImage
        src={
          'https://images.pexels.com/photos/5634615/pexels-photo-5634615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }
        style={{ height: 200, width: 300 }}
        renderCustomIndicator={(progress) => (
          <Progress.CircleSnail size={50} progress={progress} color={'grey'} />
        )}
      />
    </View>
  );

  return (
    <>
      <Header
        title="Components Example"
        color="#025FB6"
        titleProps={{ color: 'white' }}
        descriptionProps={{ color: 'white' }}
        topSafe
        border
        description="Header Description"
        renderLeft={() => <Ionicons name="menu" size={25} color={'white'} />}
        renderRight={() => (
          <Ionicons name="notifications" size={25} color={'white'} />
        )}
      />
      <Screen color="white" scrollable>
        {ButtonsContent}
        {TextContent}
        {InputContent}
        {ImageContent}
      </Screen>
    </>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ComponentScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    rowGap: 4,
    paddingHorizontal: 15,
    marginTop: 10,
    paddingVertical: 10,
  },
});
