import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Headers extends React.Component {
    render() {
        return (
            <View style={style.mhm}>
                <Text>Hello from Header.js</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    mhm: {
        // marginVertical: 70,
        // backgroundColor: '#2692FF',
        // width: 412,
        // height: 50
    }
})