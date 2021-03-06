import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import MapPreview from '../components/MapPreview';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';

const PlaceDetailsScreen = (props) => {
  const placeId = props.navigation.getParam('placeId');
  const selectedPlace = useSelector((state) =>
    state.places.places.find((place) => place.id === placeId)
  );

  const selectedLocation = {
    lat: selectedPlace.lat,
    log: selectedPlace.log,
  };
  const showMapHandler = () => {
    props.navigation.navigate('Map', {
      readOnly: true,
      initialLocation: selectedLocation,
    });
  };
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Image source={{ uri: selectedPlace.imageUri }} style={styles.image} />
      <View style={styles.locationContainer}>
        <Text style={styles.address}>{selectedPlace.address}</Text>
        <MapPreview
          location={selectedLocation}
          style={styles.mapPreview}
          onPress={showMapHandler}
        />
      </View>
    </ScrollView>
  );
};

PlaceDetailsScreen.navigationOptions = (navData) => {
  const title = navData.navigation.getParam('placeTitle');
  return {
    headerTitle: title,
  };
};

export default PlaceDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: '#ccc',
  },
  locationContainer: {
    marginVertical: 20,
    width: '90%',
    maxWidth: 350,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  address: {
    color: Colors.primaryColor,
    textAlign: 'center',
  },
  mapPreview: {
    width: '100%',
    maxWidth: 350,
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
