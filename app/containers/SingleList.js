import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import WishItems from '../components/WishItems';
import Header from '../components/Header';

class SingleList extends Component {
    render() {
        const { title } = this.props.navigation.state.params
        return (
            <View>
                {/* Header Component */}
                <Header navigation={this.props.navigation} title={`${title} List`} />
                <WishItems {...this.props} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    };
}

export default connect(mapStateToProps)(SingleList);