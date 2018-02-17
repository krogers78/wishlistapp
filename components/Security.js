import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import SecurityText from './typography/SecurityText';

export default class Security extends Component {
    render() {
        return(
            <View style={styles.contain}>
                <View style={styles.loginText}>
                    <Text style={styles.head}>Login</Text>
                </View>
                <View style={styles.numbers}>
                    <SecurityText text="4" />
                    <SecurityText text="2" />
                    <SecurityText text="7" />
                    <SecurityText text="5" />
                </View>
                <Button title="Login" onPress={() => this.props.navigation.navigate('Home')} style={styles.fuck}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    numbers: {
        flex: 5,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 50,
    },
    contain: {
        flex: 1,
    },
    loginText: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    fuck: {
        width: 200
    }
})