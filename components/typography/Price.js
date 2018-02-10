import React, { Component } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export default class Price extends Component {
    render() {
        return (
            <Text style={styles.description}>{this.props.text}</Text>
        )
    }
}
const styles = StyleSheet.create({
    description: {
        paddingTop: 15,
        ...Platform.select({
            ios: {
                fontWeight: 'bold',
            },
            android: {
                fontWeight: 'bold'
            }
        }),
        fontSize: 16,
        opacity: 2,
    },
})