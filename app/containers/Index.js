import React, { Component } from 'react';
import { StyleSheet, Text, View , ScrollView, ActivityIndicator, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import { populateLists, suggested, setRefresh } from '../redux/actions';
import Header from '../components/Header';
import Wishlists from '../components/Wishlists';
import Suggested from '../components/Suggested';

class Index extends Component {
  componentWillMount() {
    this._onRefresh();
  }
  async _onRefresh() {
    await this.props.refreshing(true);
    await this.props.getData();
    await this.props.refreshing(false);    
  }
  render() {
    if (this.props.data.loaded) {
      return (
        <View>
          {/* Header Component */}
          <Header navigation={this.props.navigation} title="Home" />
          
          <ScrollView refreshControl={
            <RefreshControl
              refreshing={this.props.data.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          } style={styles.bottom}>
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
          dispatch(suggested());
        },
        refreshing: refresh => {
          dispatch(setRefresh(refresh));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);