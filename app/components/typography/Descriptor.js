import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <Text style={styles.description}>{this.props.text}</Text>
        )
    }
}
const styles = StyleSheet.create({
    description: {
        fontSize: 20,
        width: 250,
        ...Platform.select({
            ios: {
                fontWeight: '600',
            },
            android: {
                fontWeight: '400'
            }
        })
    },
})