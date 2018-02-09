import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// Bringing in the icons to use
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './components/Home';
import AddItem from './components/AddItem';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyApp />

      </View>
    );
  }
}

const MyApp = DrawerNavigator({
  Home: { screen: Home },
  AddItem: { screen: AddItem },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED'
  }
});
