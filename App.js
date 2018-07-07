import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from './styles/global_styles.js';
import CheckBox from 'react-native-checkbox';
import SystemSetting from 'react-native-system-setting'
import RNGooglePlaces from 'react-native-google-places'

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      placeResults: []
    }
  }
  render() {
    return (
      <View style={globalStyles.container}>
        <View style={globalStyles.heading}>
          <Text style={globalStyles.title}>ChurchMuter</Text>
        </View>

        <View style={globalStyles.form}>
          <Button title="Mute Me" color="#4286f4" onPress={() => this.mute()} />
          <Button title="Search" color="#4286f4" onPress={() => this.getCurrentPlace()} />
        </View>
      </View>
    );
  }

  getCurrentPlace(){
    RNGooglePlaces.getCurrentPlace()
      .then((results) => {
        results.map((result) =>{
          result.types.map((type) =>{
            console.log(type)
            if(type == 'church'){
              this.mute()
            }
          })
        })
      })
      .catch((error) => console.log(error.message));
  }

  mute(){
    SystemSetting.setVolume(0, {type: 'ring', playSound: false, showUI: false});
    SystemSetting.getVolume('ring').then((volume)=>{
      console.log('Current volume is ' + volume);
    });
  }
}
