import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { DrawerNavigator } from 'react-navigation';
import store from './app/store';

import Index from './app/containers/Index';
import AddItem from './app/containers/AddItem';
import SingleList from './app/containers/SingleList';

export default class App extends Component {
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
  AddItem: { screen: AddItem },
  WishList: { screen: SingleList },
  // Security: { screen: Security },
});