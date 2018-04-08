import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
