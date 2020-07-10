import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Markers() {

  state={ 
    region:{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
	  },
    markers: [
        {
          latlng: {
            latitude: 37.78825,
            longitude: -122.4324,
          },
          title: 'Diş Hekimi Tuğba Duymaz',
          description: 'Feneryolu Mahallesi, Bağdat Cd. No:117/8, 34726 Kadıköy/İstanbul'
        }
    ]  
    
  }

  return (
    <View style={styles.container}>
     <MapView
       style={styles.map}
       region={this.state.region}
     >

       {
         this.state.markers.map((marker,key) =>( 
          <Marker 
            key={marker.key}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          />
         ))
       }
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