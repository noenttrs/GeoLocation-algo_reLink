import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })()



  let text = 'Waiting..';
  let latitude = 0;
  let longitude = 0;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    console.log(location)
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
    console.log(latitude, longitude)
    text = JSON.stringify(location, null, 4);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude: 48.866667,
        longitude: 2.333333,
        latitudeDelta: 0.922,
        longitudeDelta: 0.421,
      }}>
        
        <Marker
          key = "ma position"
          coordinate={{ latitude : latitude , longitude : longitude }}
        />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '40%',
  },

});
