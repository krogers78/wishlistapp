import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

import Descriptor from './typography/Descriptor';
import Heading from './typography/Heading';

export default class Suggested extends Component {
    render() {
        return (
            <View>
                <Heading text="Suggestions" />
                {/* Separate each item. WILL LATER BE A LOOP */}
                {/* Make a Component */}
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross.jpg')} style={styles.image} />
                    <Descriptor text='Funko Pop TV Bob Ross with Raccoon (Styles May Vary) Collectible Figure' />
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/dracomalfoy.jpg')} style={styles.image} />
                    <Descriptor text='Funko POP Movies: Harry Potter Action Figure - Draco Malfoy' />
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross2.jpg')} style={styles.image} />
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
        paddingHorizontal: 15,
    },
    image: {
        width: 120,
        height: 160,
        resizeMode: 'contain',
    },
})