import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CheckBox from 'react-native-checkbox';
import SystemSetting from 'react-native-system-setting'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>ChurchMuter</Text>
        </View>

        <View style={styles.form}>
          <Text>Select types of locations to mute at</Text>
          <CheckBox
            label='Church'
          />
          <CheckBox
            label='Library'
          />
          <CheckBox
            label='School'
          />
          <Button title="Mute Me" color="#4286f4" onPress={() => this.mute()} />
        </View>
      </View>
    );
  }

  mute(){
    // SystemSetting.setVolume(0.5);
    SystemSetting.setVolume(0, {type: 'ring', playSound: false, showUI: false});
    SystemSetting.getVolume('ring').then((volume)=>{
      console.log('Current volume is ' + volume);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heading: {
    marginTop: 40
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
