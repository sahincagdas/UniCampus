import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Etkinlik verileri için örnek bir dizi
const etkinlikler = [
  { id: 1, baslik: 'Yüzme Yarışması', tarih: '2024-06-30', aciklama: 'Yüzme yarışması düzenlenecek.' },
  { id: 2, baslik: 'Kitap Okuma Günü', tarih: '2024-07-05', aciklama: 'Kitap okuma etkinliği düzenlenecek.' },
  // Diğer etkinlikler buraya eklenebilir
];

const EtkinlikSayfasi = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={etkinlikler}
        renderItem={({ item }) => (
          <View style={styles.etkinlikKarti}>
            <Text style={styles.baslik}>{item.baslik}</Text>
            <Text style={styles.tarih}>{item.tarih}</Text>
            <Text style={styles.aciklama}>{item.aciklama}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f4f8',
  },
  etkinlikKarti: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  baslik: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#164863',
  },
  tarih: {
    color: '#333',
    marginBottom: 4,
  },
  aciklama: {
    color: '#666',
  },
});

export default EtkinlikSayfasi;
