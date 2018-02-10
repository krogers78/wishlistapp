import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Platform, TouchableOpacity } from 'react-native';

// Bringing in the icons to use
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.bg}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                    <Icon
                        name='menu'
                        size={40}
                        color='#f8f8f8'
                    />
                </TouchableOpacity>

                <Text style={styles.text}>Wish List</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddItem')}>
                    <Icon
                        name='add'
                        size={40}
                        color='#f8f8f8'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#2692FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        paddingBottom: 10,
        ...Platform.select({
            android: {
                paddingTop: 40
            },
            ios: {
                paddingTop: 30,
            }
        })
    },
    text: {
        fontSize: 23,
        color: '#f8f8f8'
    }
})