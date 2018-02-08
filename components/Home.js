import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Heading from './type/Heading';

export default class Home extends Component {
    render() {
        return(
            <View>
                <Heading content="Wishlist" />

                <View style={styles.group}>
                    <Text>testing</Text>
                    <Text style={styles.test}>General List</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    test: {
        width: 250
    }
})