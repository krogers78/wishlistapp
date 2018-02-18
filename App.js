import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

// Bringing in the icons to use
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './components/screens/Home';
import AddItem from './components/screens/AddItem';
import SingleList from './components/screens/SingleList';
import Security from './components/Security';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      items: []
    }
  }

  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const apiUrl = 'http://localhost:3000/api/list';
    const options = { method: 'GET' }


    const response = await fetch(apiUrl, options);
    const json = await response.json();
    this.setState({items:json, loaded:true})
  }
  render() {
    if (this.state.loaded) {
      return (
        <View style={styles.container}>
          <MyApp screenProps={this.state.items} />
        </View>
      )
    }
    return <Text>testing</Text>
  }
}

const MyApp = DrawerNavigator({
  Home: { screen: Home },
  AddItem: { screen: AddItem },
  WishList: { screen: SingleList },
  Security: { screen: Security },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  }
});
