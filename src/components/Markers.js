import * as React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function Markers() {

  return (
    <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
       <Marker 
        coordinate={{
        latitude: 37.78825,
        longitude: -122.4324,
        }}
        image={require('../assets/location1.png')}
        title= "Diş Hekimi Tuğba Duymaz"
        description= "Feneryolu Mahallesi, Bağdat Cd. No:117/8, 34726 Kadıköy/İstanbul"
      >
      </Marker>
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

export default Markers;