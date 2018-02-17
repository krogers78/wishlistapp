import React, { Component } from 'react';
import { View } from 'react-native';
import WishItems from '../WishItems';
import Header from '../Header';

export default class SingleList extends Component {
    
    render() {
        return(
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title="General List" />
                <WishItems screenProps={this.props.screenProps} />
            </View>
        )
    }
}