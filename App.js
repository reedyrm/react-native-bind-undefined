import React from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <Animated.View>
        <Text>Something</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
