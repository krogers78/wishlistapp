import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import ItemInputs from '../components/ItemInputs';

export default class AddItem extends Component {
    render() {
        return (
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title="Add Item" />
                {/* Inputs Component */}
                <ItemInputs {...this.props} />
            </View>
        )
    }
}