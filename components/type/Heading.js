import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Heading extends Component {
    render() {
        return (
            <Text style={styles.heading}>{this.props.content}</Text>
        )
    }
}
const styles = StyleSheet.create({
    heading: {
        color: '#000',
        opacity: 10,
        fontWeight: '600',
        padding: 30,
        fontSize: 15
    }
})