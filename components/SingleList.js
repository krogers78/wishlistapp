import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import WishItems from './WishItems';
import Header from './Header';

export default class SingleList extends Component {
    render() {
        return(
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title="General List" />
                <ScrollView style={styles.bottom}>
                    <WishItems />
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