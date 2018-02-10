import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Platform } from 'react-native';

import Descriptor from './typography/Descriptor';
import Price from './typography/Price';

export default class WishItems extends Component {
    render() {
        return(
            <View>
                {/* Separate each item. WILL LATER BE A LOOP */}
                {/* Make a Component */}
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross.jpg')} style={styles.image} />
                    <View>
                        <Descriptor text='Funko Pop TV Bob Ross with Raccoon (Styles May Vary) Collectible Figure' />
                        <Price text="$8.77" />
                    </View>
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/dracomalfoy.jpg')} style={styles.image} />
                    <View>
                        <Descriptor text='Funko POP Movies: Harry Potter Action Figure - Draco Malfoy' />
                        <Price text="$9.90" />
                    </View>     
                </View>
                <View style={styles.fl}>
                    <Image source={require('../assets/images/bobross2.jpg')} style={styles.image} />
                    <View>
                        <Descriptor text='Funko Pop TV Bob Ross in Overalls Collectible Figure' />
                        <Price text="$8.95" />
                    </View>
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
    }
})