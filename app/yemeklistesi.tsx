import React from 'react';
import {  StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

const YemekListesiScreen = () => {
  const daysOfWeek = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
  const ogun = 'Öğle Yemeği';

  const corbalar = [
    'Mercimek Çorbası',
    'Domates Çorbası',
    'Tavuklu Noodle Çorbası',
    'Sebze Çorbası',
    'Yoğurtlu Taze Nane Çorbası',
  ];

  const anaYemekler = [
    'Fırın Tavuk ve Bulgur Pilavı',
    'Zeytinyağlı Yaprak Sarma ve Ayran',
    'Kıymalı Karnabahar Yemeği',
    'Balık Izgara ve Patates Püresi',
    'Sebzeli Kıymalı Makarna',
  ];

  const yanUrunler = [
    'Ispanak Salatası',
    'Cacık',
    'Zeytinyağlı Pırasa',
    'Turşu',
    'Yoğurtlu Salatalık',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Haftalık Öğle Yemeği Menüsü</Text>
      {daysOfWeek.map((day, dayIndex) => (
        <View key={dayIndex} style={styles.gunContainer}>
          <Text style={styles.gunText}>{day}</Text>
          <View style={styles.ogunItem}>
            <Text style={styles.ogunText}>{ogun}</Text>
            <Text style={styles.yemekListesi}>
              <Text style={styles.yemekTipi}>Çorba:</Text> {corbalar[dayIndex]}
            </Text>
            <Text style={styles.yemekListesi}>
              <Text style={styles.yemekTipi}>Ana Yemek:</Text> {anaYemekler[dayIndex]}
            </Text>
            <Text style={styles.yemekListesi}>
              <Text style={styles.yemekTipi}>Yan Ürün:</Text> {yanUrunler[dayIndex]}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#164863",
    textAlign:"center",
  },
  gunContainer: {
    marginBottom: 16,
  },
  gunText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: "#164863",
    textAlign: "center",
  },
  ogunItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    alignItems: "baseline",
    borderRadius:15,
  },
  ogunText: {
    fontWeight: 'bold',
    color: "#164863"
    
  },
  yemekListesi: {
    marginTop: 4,
  },
  yemekTipi: {
    fontWeight: 'bold',
    marginRight: 4,
    color: "#164863"
  },
});

export default YemekListesiScreen;
