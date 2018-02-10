import React, { Component } from 'react';
import { ScrollView, TextInput, Text, StyleSheet, Platform, Image, View } from 'react-native';

import Heading from './typography/Heading';
import Header from './Header';
import ItemInputs from './ItemInputs';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddItem extends Component {
    render() {
        return(
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} />
                {/* Inputs Component */}
                <ItemInputs />
            </View>
        )
    }
}