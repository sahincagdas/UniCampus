import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import kulupData from '../components/data/kulupData';

const KulupDetay = () => {
  const { id } = useLocalSearchParams();

  // Find the club data using the id from the query parameters
  const club = kulupData.find(k => k.id.toString() === id);

  if (!club) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Kulüp bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{club.kulupadı}</Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Okul: </Text>
          {club.okul}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Birim Sorumlusu: </Text>
          {club.birimsorumlusu}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Danışman: </Text>
          {club.danısman}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.label}>Kulüp Başkanı: </Text>
          {club.kulupbaskan}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f4f8',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#164863',
    marginBottom: 16,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
    color: '#164863',
  },
});

export default KulupDetay;
