import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

// Bringing in the icons to use
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {
    render() {
        return (
                <View style={styles.bg}>
                    <Icon
                        name='menu'
                        size={40}
                        color='#f8f8f8'
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    />

                    <Text style={styles.text}>Wish List</Text>
                    <Icon
                        name='add'
                        size={40}
                        color='#f8f8f8'
                        onPress={() => this.props.navigation.navigate('AddItem')}
                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#2692FF',
        flexDirection: 'row',
        justifyContent: 'space-around',
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