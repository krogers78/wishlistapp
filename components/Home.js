import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from './Header';
import Wishlists from './Wishlists';
import Suggested from './Suggested';


export default class Home extends Component {
    render() {
        return(
            <View>
                {/* Header Component */}    
                <Header navigation={this.props.navigation} title="Home" />
                {/* Wishlists and Suggested Components */}
                {/* Flat list */}
                <ScrollView style={styles.bottom}>
                    <Wishlists navigation={this.props.navigation} />
                    <Suggested />                    
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottom: {
        marginBottom: 60
    } 
});