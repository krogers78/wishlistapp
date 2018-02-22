import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import AddItemForm from '../components/AddItemForm';

export default class AddItem extends Component {
    render() {
        return (
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title="Add Item" />
                {/* Inputs Component */}
                <AddItemForm {...this.props} />
            </View>
        )
    }
}