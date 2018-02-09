import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Heading extends Component {
    render() {
        return (
            <Text style={styles.heading}>{this.props.text}</Text>
        )
    }
}
const styles = StyleSheet.create({
    heading: {
        color: '#000',
        opacity: 10,
        fontWeight: '600',
        paddingVertical: 30,
        paddingRight: 30,
        paddingLeft: 20,
        fontSize: 15
    }
})