import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from './styles/global_styles.js';
import CheckBox from 'react-native-checkbox';
import SystemSetting from 'react-native-system-setting'
import RNGooglePlaces from 'react-native-google-places'
import Options from './components/Options.js'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={globalStyles.container}>
        <Options />
      </View>
    );
  }
}
