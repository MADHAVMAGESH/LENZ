import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Lottie from 'lottie-react-native';

const ChatUI = () => {
  return (
    <View>
      <Animatable.View animation="fadeIn" duration={500}>
        <Text>Your message here</Text>
      </Animatable.View>
      <Lottie
        source={require('./path_to_typing_indicator.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default ChatUI;