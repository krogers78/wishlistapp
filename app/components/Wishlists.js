import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Heading from './typography/Heading';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default class Wishlists extends Component {
    render() {
        const { lists } = this.props.data;
        return (
            <View>
                <Heading text="Wish List" />
                <FlatList
                    data={lists}
                    keyExtractor={(x, i) => i}
                    style={styles.bottom}
                    renderItem={({ item, index }) =>
                        <TouchableOpacity style={styles.group} 
                                          onPress={() => this.props.navigation.navigate('WishList',  { items: lists[index],  title: lists[index].name })}>
                            <MaterialCommunityIcons
                                name='star-circle'
                                size={80}
                                color='#6AB4FF'
                            />
                            <Text style={styles.list}>{item.name}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    list: {
        width: 275,
        fontSize: 22
    }
})