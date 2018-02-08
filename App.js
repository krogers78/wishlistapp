import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from 'react-native-elements'

import Main from './components/Main';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#f8f8f8' }}
          centerComponent={{ text: 'Wish List', style: { color: '#f8f8f8', fontSize: 20 } }}
          rightComponent={{ icon: 'add', color: '#f8f8f8' }}
          outerContainerStyles={{ backgroundColor: '#2692FF' }}
        />
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
});
