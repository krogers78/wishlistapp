import React, { Component } from 'react';
import { ScrollView, TextInput, Text, StyleSheet, Platform, Image, View, Button, TouchableOpacity } from 'react-native';

import Heading from './typography/Heading';
import Header from './Header';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddItem extends Component {
    render() {
        return (
            <ScrollView style={styles.bottom}>
                {/* TITLE */}
                <Heading text="Title" />
                <TextInput style={styles.input}
                    placeholder="Harry Potter and the Chamber of Secrets"
                    value="Funko Pop TV Bob Ross with Raccoon (Styles May Vary) Collectible Figure"
                />
                {/* IMAGE NEED TO FIGURE OUT IMAGE UPLOAD */}
                <Heading text="Image" />
                <Image source={require('../assets/images/bobross.jpg')} style={styles.image} />
                {/* PRICE */}
                <Heading text="Price" />
                <TextInput style={styles.input}
                    placeholder="$10.99"
                    value="8.77"
                    keyboardType="numeric"
                />
                {/* LOCATION */}
                <Heading text="Location" />
                <TextInput style={styles.input}
                    placeholder="Wal-Mart"
                    value="Amazon"
                />
                {/* LIST */}
                <Heading text="List" />
                <TextInput style={styles.input}
                    placeholder="General"
                    value="General"
                />
                {/* BUTTON */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('WishList')} style={styles.button}>
                    <Text style={styles.btnText}>Add Item</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
            }
        }),
        marginHorizontal: 20,
        paddingBottom: 10,
        fontSize: 20
    },
    image: {
        width: 180,
        height: 220,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    bottom: {
        marginBottom: 100
    },
    button: {
        backgroundColor: '#FFCDC9',
        alignSelf: 'flex-end',
        width: 200,
        padding: 10,
        borderRadius: 8,
        margin: 10
    },
    btnText: {
        fontSize: 22,
        textAlign: 'center'
    }
})