import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Expo from 'expo';
import { DrawerNavigator } from 'react-navigation';
import store from './app/redux/store';

import Index from './app/containers/Index';
import AddItem from './app/containers/AddItem';
import SingleList from './app/containers/SingleList';
import Security from './app/components/Security';

export default class App extends Component {

  componentDidMount() {
    this.getLocationAsync();
  }

  async getLocationAsync() {
  const { CAMERA_ROLL, Permissions } = Expo;
  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if (status === 'granted') {
    return console.log('Storage permission granted')
  } else {
    throw new Error('Storage permission not granted');
  }
}
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}
const MyApp = DrawerNavigator({
  Home: { screen: Index },
  WishList: { screen: SingleList },
  AddItem: { screen: AddItem },
  Security: { screen: Security },
});