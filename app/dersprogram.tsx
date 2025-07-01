import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';

const DersProgramiScreen = () => {
  const daysOfWeek = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'];
  const lessons = ['Veri Yapıları', 'İngilizce 2', 'Temel Matematik', 'Lineer Cebir', 'Algoritma', 'Otomasyon', 'Bilgisayar Grafikleri'];

  const dersSaatleri = [
    ['09:00 - 11:00', '13:00 - 15:00'],
    ['09:00 - 11:00', '15:00 - 17:00'],
    ['10:00 - 11:00', '14:00 - 16:00'],
  ];

  const dersProgrami = [
    { gun: 'Pazartesi', dersler: ['Veri Yapıları', 'İngilizce 2'], saatler: ['09:00 - 11:00', '13:00 - 15:00'], aciklama: ['Bu haftaki derse bilgisayarlarınızı getirmeniz gerekmektedir.', 'İngilizce 2 dersi açıklaması...'] },
    { gun: 'Salı', dersler: ['Temel Matematik', 'Lineer Cebir'], saatler: ['09:00 - 11:00', '15:00 - 17:00'], aciklama: ['Temel Matematik dersi açıklaması...', 'BU hafta ödev kontrolleri yapılacak'] },
    { gun: 'Çarşamba', dersler: ['Algoritma', 'Otomasyon'], saatler: ['10:00 - 11:00', '14:00 - 16:00'], aciklama: ['Algoritma dersi açıklaması...', 'Otomasyon dersi açıklaması...'] },
    { gun: 'Perşembe', dersler: ['Bilgisayar Grafikleri', 'Veri Yapıları'], saatler: ['10:00 - 11:00', '14:00 - 16:00'], aciklama: ['Bilgisayar Grafikleri dersi açıklaması...', 'Veri Yapıları dersi açıklaması...'] },
    { gun: 'Cuma', dersler: ['Algoritma', 'Otomasyon'], saatler: ['10:00 - 11:00', '14:00 - 16:00'], aciklama: ['Algoritma dersi açıklaması...', 'Otomasyon dersi açıklaması...'] },
  ];

  const handleLessonPress = (ders: string, aciklama: string) => {
    Alert.alert(
      `${ders} Hatırlartmaları`,
      `${aciklama}`,
      [{ text: 'Kapat', style: 'cancel' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Haftalık Ders Programı</Text>
      {dersProgrami.map((gun, gunIndex) => (
        <View key={gunIndex} style={styles.gunContainer}>
          <Text style={styles.gunText}>{gun.gun}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.dersContainer}>
              {gun.dersler.map((ders, dersIndex) => (
                <TouchableOpacity
                  key={dersIndex}
                  style={[
                    styles.dersItem,
                  ]}
                  onPress={() => handleLessonPress(ders, gun.aciklama[dersIndex])}
                >
                  <Text style={styles.dersText}>{ders}</Text>
                  <Text style={styles.saatText}>{gun.saatler[dersIndex]}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
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
    color: '#164863',
  },
  gunContainer: {
    marginBottom: 16,
  },
  gunText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#164863',
  },
  dersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dersItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    margin: 4,
    alignItems: 'center',
    borderRadius: 15,
  },
  dersText: {
    fontWeight: 'bold',
    color: '#164863',
  },
  saatText: {
    marginTop: 4,
    color: '#427D9D',
  },
});

export default DersProgramiScreen;
