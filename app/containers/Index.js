import React, { Component } from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View , ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { populateLists, setLoaded } from '../redux/actions';

import Header from '../components/Header';
import Wishlists from '../components/Wishlists';
import Suggested from '../components/Suggested';

class Index extends Component {

  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const apiUrl = 'http://localhost:3000/api/list';
    const options = { method: 'GET' }


    const response = await fetch(apiUrl, options);
    const json = await response.json();

    this.setState({ items: json, loaded: true })
    this.props.setLists(json)
    this.props.setFinished()
  }

  render() {
    if (this.props.wishlists.loaded) {
      return (
        <View >
          {/* Header Component */}
          <Header navigation={this.props.navigation} title="Home" />
          
          <ScrollView style={styles.bottom}>
            <Wishlists {...this.props} />
            <Suggested />
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
    marginBottom: 60
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
        wishlists: state.wishlists
    };
}
const mapDispatchToProps = dispatch => {
    return {
        setLists: lists => {
          dispatch(populateLists(lists));
        },
        setFinished: () => {
          dispatch(setLoaded())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);