import React, { Component } from "react";
import { Text, StyleSheet } from 'react-native';

export default class SecurityText extends Component {
    render() {
        return (
            <Text style={styles.text}>{this.props.text}</Text>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 50
    }
})