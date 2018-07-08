import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from './styles/global_styles.js';
import Options from './components/Options.js'

const LocationListener = async (data) => {
  console.log('here');
}

AppRegistry.registerHeadlessTask('LocationListener', () => LocationListener);

export default class App extends Component<Props> {
  render() {
    return (
      <View style={globalStyles.container}>
        <Options />
      </View>
    );
  }
}
