import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


function AboutScreen() {

  state={ 
    region:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  }

  return (
    <View style={styles.container}>
     <MapView
       style={styles.map}
       region={this.state.region}
     >
     </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });

export default AboutScreen;