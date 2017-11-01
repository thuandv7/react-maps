/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={[styles.container, {  }]}  >
          <MapView 
          provider={PROVIDER_GOOGLE} style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          loadingEnabled={true}
          showsIndoorLevelPicker={true}
          onRegionChange={this.onRegionChange}
          >

          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    top: 0, right: 0, bottom: 0, left: 0, position: 'absolute'
  },
});
