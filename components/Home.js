import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import Heading from './typography/Heading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Suggested from './Suggested';
import Header from './Header';


export default class Home extends Component {
    render() {
        return(
            <View>
                <Header navigation={this.props.navigation} />
                
                <ScrollView style={styles.bottom}>
                    <Heading text="Wishlist" />
                    
                    <View style={styles.group}>
                        <Icon
                            name='star-circle'
                            size={80}
                            color='#6AB4FF'
                        />
                        <Text style={styles.list}>General List</Text>
                    </View>
                    <Heading text="Suggestions" />
                    <Suggested />
                </ScrollView>
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
    },
    bottom: {
        marginBottom: 60
    }
})