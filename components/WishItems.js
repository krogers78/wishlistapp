import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Descriptor from './typography/Descriptor';
import Price from './typography/Price';

export default class WishItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: [
                require('../assets/images/bobross.jpg'),
                require('../assets/images/dracomalfoy.jpg'),
                require('../assets/images/bobross2.jpg'),
                require('../assets/images/switch.jpg'),
            ]
        }
    }
    render() {
        return(
            <FlatList
                data={this.props.screenProps}
                keyExtractor={(x, i) => i}
                style={styles.bottom}
                renderItem={({ item }) => item.items.map((e, k) =>
                    <View style={styles.fl} key={k}>
                        <Image source={this.state.img[k]} style={styles.image} />
                        <View>
                            <Descriptor text={e.title} />
                            <Price text={e.price} />
                        </View>
                    </View>
                )}
            />
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
    bottom: {
        marginBottom: 60,
        marginTop: 20
    }
})