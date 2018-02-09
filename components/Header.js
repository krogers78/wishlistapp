import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Bringing in the icons to use
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.bg}>
                <Icon
                    name='menu'
                    size={40}
                    color='#f8f8f8'
                />
                <Text style={styles.text}>Wish List</Text>
                <Icon
                    name='add'
                    size={40}
                    color='#f8f8f8'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#2692FF',
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10
    },
    text: {
        fontSize: 23,
        color: '#f8f8f8'
    }
})