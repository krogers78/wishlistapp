import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Home from './Home';
import Suggested from './Suggested';

export default class Main extends Component {
    render() {
        return (
            <View style={styles.k}>
                <ScrollView>
                <Home />
                    <Suggested />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    k: {
        flex: 7
    }
})