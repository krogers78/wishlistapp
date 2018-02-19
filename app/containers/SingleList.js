import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import WishItems from '../components/WishItems';
import Header from '../components/Header';

class SingleList extends Component {

    render() {
        return (
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title="General List" />
                <WishItems {...this.props} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        wishlists: state.wishlists
    };
}

export default connect(mapStateToProps)(SingleList);