import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import Descriptor from './typography/Descriptor';

export default class Suggested extends Component {
    render() {
        return(
            <View>
                {/* Separate each item. WILL LATER BE A LOOP */}
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross.jpg')} style={{ width: 120, height: 160 }} />
                    <Descriptor text='Funko Pop TV Bob Ross with Raccoon (Styles May Vary) Collectible Figure' />
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/dracomalfoy.jpg')} style={{ width: 120, height: 160 }} />
                    <Descriptor text='Funko POP Movies: Harry Potter Action Figure - Draco Malfoy' />
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross2.jpg')} style={{ width: 120, height: 160 }} />
                    <Descriptor text='Funko Pop TV Bob Ross in Overalls Collectible Figure' />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    fl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        paddingLeft: 15
    }
})