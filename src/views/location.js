import * as React from 'react';
// import Region from '../components/Region';
import Markers from '../components/Markers';
import { View ,Text,StyleSheet} from 'react-native';
import Adress from '../components/Adress';

function AboutScreen() {


  return (
    <View style={location.container}>
     
     
      <View style={location.boxOne}>
        <Markers/>
      </View>
    
      <View style={location.boxTwo}>
      <Adress />
      </View>
    

    </View>
  
  );
}


const location = StyleSheet.create({
  container: {
    flex:1,
  },
  boxOne: {
    flex:2,
  },
  boxTwo: {
    flex: 3,
  }
});


export default AboutScreen;