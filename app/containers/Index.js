import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { populateLists, suggested } from '../redux/actions';

import Header from '../components/Header';
import Wishlists from '../components/Wishlists';
import Suggested from '../components/Suggested';

import MyImagePicker from '../components/MyImagePicker';

class Index extends Component {

  componentWillMount() {
    this.props.getData();
  }

  render() {
    if (this.props.data.loaded) {
      return (
        <View >
          {/* Header Component */}
          <Header navigation={this.props.navigation} title="Home" />
          
          <ScrollView style={styles.bottom}>
            <Wishlists {...this.props} />
            <Suggested {...this.props} />
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={[styles.notLaodedContainer, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED'
  },
  bottom: {
    marginBottom: 70
  },
  notLaodedContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

const mapStateToProps = state => {
    return {
        data: state.data
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => {
          dispatch(populateLists());
          // dispatch(suggested());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);