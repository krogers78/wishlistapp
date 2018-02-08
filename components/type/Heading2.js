import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Heading2 extends Component {
    render() {
        return (
            <Text style={styles.h2}>{this.props.content}</Text>
        )
    }
}
const styles = StyleSheet.create({
    h2: {
        fontSize: 18,
        marginVertical: 10.5,
        marginHorizontal: 0,
        fontWeight: 'bold',
    }
})