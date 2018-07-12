import SystemSetting from 'react-native-system-setting'
import RNGooglePlaces from 'react-native-google-places'

module.exports = async (taskData) => {
  await getCurrentPlace();
};

const getCurrentPlace = () => {
  RNGooglePlaces.getCurrentPlace()
    .then((results) => {
      results.map((result) =>{
        result.types.map((type) =>{
          console.log(type)
          if(type == 'church'){
            mute();
          }else{
            unmute();
          }
        })
      })
    })
    .catch((error) => console.log(error.message));
}

const mute = () => {
  SystemSetting.setVolume(0, {type: 'ring', playSound: false, showUI: false});
  SystemSetting.getVolume('ring').then((volume)=>{
    console.log('Current volume is ' + volume);
  });
}

const unmute = () => {
  SystemSetting.getVolume('ring').then((volume)=>{
    if(volume == 0){
      SystemSetting.setVolume(70, {type: 'ring', playSound: false, showUI: false});
    }
  });
}
