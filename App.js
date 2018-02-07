import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from 'react-native-elements'

// import Header from './components/Header';
import Main from './components/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Header /> */}
        <Header
          leftComponent={{ icon: 'menu', color: '#f8f8f8' }}
          centerComponent={{ text: 'Wish List', style: { color: '#f8f8f8' } }}
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
