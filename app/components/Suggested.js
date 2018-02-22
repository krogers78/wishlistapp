import React, { Component } from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import Descriptor from './typography/Descriptor';
import Heading from './typography/Heading';

export default class Suggested extends Component {
    render() {
        const { suggested } = this.props.data;
        return (
            <View>
                <Heading text="Suggestions" />
                <FlatList
                    data={suggested}
                    keyExtractor={(x, i) => i}
                    style={styles.bottom}
                    renderItem={({ item, index }) => 
                        <View style={styles.fl}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Descriptor text={item.title} />
                        </View>
                    } />
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