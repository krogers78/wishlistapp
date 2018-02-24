import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import Descriptor from './typography/Descriptor';
import Price from './typography/Price';

export default class WishItems extends Component {
    render() {
        const { items } = this.props.navigation.state.params
       
        return (
            <FlatList
                data={items.items}
                keyExtractor={(x, i) => i}
                style={styles.bottom}
                renderItem={({ item, index }) => 
                    <View style={styles.fl} key={index}>
                        <Image source={{ uri: `data:image/jpg;base64,${item.image}` }} style={styles.image} />
                        <View>
                            <Descriptor text={item.title} />
                            <Price text={item.price} />
                        </View>
                    </View>
                }
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