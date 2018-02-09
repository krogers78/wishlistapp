import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Heading from './typography/Heading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Home extends Component {
    render() {
        return(
            <View>
                <Heading content="Wishlist" />
                <View style={styles.group}>
                    <Icon
                        name='star-circle'
                        size={80}
                        color='#6AB4FF'
                    />
                    <Text style={styles.test}>General List</Text>
                </View>
                <Heading content="Suggestions" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    test: {
        width: 275,
        fontSize: 22
    }
})