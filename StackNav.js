import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View } from 'react-native';


const firstScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  );
};

const StackNav = createStackNavigator({
  something: {
    screen: firstScreen
  }
});

export { StackNav };