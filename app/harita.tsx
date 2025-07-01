import React, { useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const MyMap = () => {
  const markers = [
    {
      id: 1,
      latitude: 40.32925,
      longitude: 36.47675,
      title: "TOGÜ Kampüs",
      description: "TOGÜ Kampüsü Yerleşke",
    },
    {
      id: 2,
      latitude: 40.32,
      longitude: 36.50,
      title: "İşaret 2",
      description: "Mühendislik Fakültesi",
    },
    {
      id: 3,
      latitude: 40.32925,
      longitude: 36.49675,
      title: "İşaret 3",
      description: "Ziraat Fakültesi",
    },
  ];

  const [selectedMarker, setSelectedMarker] = useState<{ title: string; description: string } | null>(null);

  const handleMarkerPress = (marker: { title: string; description: string }) => {
    setSelectedMarker(marker);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.32925,
          longitude: 36.47675,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          >
            <Callout>
              <View>
                <Text style={styles.calloutTitle}>{marker.title}</Text>
                <Text>{marker.description}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      {selectedMarker && (
        <ScrollView style={styles.descriptionContainer}>
          <View style={styles.descriptionItem}>
            <Text style={styles.title}>{selectedMarker.title}</Text>
            <Text style={styles.description}>{selectedMarker.description}</Text>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  map: {
    height: 300,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
  },
  descriptionContainer: {
    marginTop: 20,
    width: '90%',
    paddingHorizontal: 10,
  },
  descriptionItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#164863',
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyMap;
