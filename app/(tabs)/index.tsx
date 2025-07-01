import React, {useState} from 'react';
import {Button ,TouchableOpacity, StyleSheet, Image,Animated, Text, View, Pressable,useColorScheme} from 'react-native';
import { Link } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../constants/Colors';

import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

function TabOneScreen() {
  const colorScheme = useColorScheme();
  
  const [scaleValues] = useState({
    dersProgramlari: new Animated.Value(1),
    kampusHaritasi: new Animated.Value(1),
    ogrenciKlup: new Animated.Value(1),
    yemekList: new Animated.Value(1),
    etkinlikTakvim: new Animated.Value(1),
    kutuphane: new Animated.Value(1),
    // Diğer düğmeler için de animasyon ekle
  });

  const startScaleAnimation = (buttonName: keyof typeof scaleValues) => {
    const buttonScaleValue = scaleValues[buttonName];
    
    Animated.sequence([
      Animated.timing(buttonScaleValue, { toValue: 1.2, duration: 100, useNativeDriver: true }),
      Animated.timing(buttonScaleValue, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start(() => {
      console.log(`${buttonName} tıklandı`);
      
    });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>unicampus</Text>
      <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={30}
                    color={'#164863'}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
            {/* <Link href="/dersprogram" asChild>
              
              <Pressable style={styles.topicButton}>
                
                {({pressed}) => (
                  <Text style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>Ders Programları</Text>
                  
                  )}
                
              </Pressable>
              
            </Link> */}
            {/* <Link href="/dersprogram" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require("../MenuScreen/mdersprogram.png")} style={styles.topicImage}  />}
                
              </Pressable>
              
            </Link> */}
            
      
      

      <View style={styles.topTextContainer}>
      
      </View>
      <View style={styles.content}>
        
        <View style={styles.topicsContainer}>
          
        <Link href="/dersprogram" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require("../MenuScreen/dersprogramı.png")} style={styles.topicImage}  />}
              </Pressable>
            </Link>

            <Link href="/harita" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require('../MenuScreen/harita.png')} style={styles.topicImage}  />}
              </Pressable>
            </Link>
            <Link href="/ogrenciKulupleri" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require("../MenuScreen/ogrenciKulupleri.png")} style={styles.topicImage}  />}
              </Pressable>
            </Link>
            <Link href="/yemeklistesi" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require('../MenuScreen/yemeklistesi.png')} style={styles.topicImage}  />}
              </Pressable>
            </Link>
            

          {/* <TouchableOpacity
            style={[styles.topicButton, { transform: [{ scale: scaleValues.kampusHaritasi }] }]}
            onPress={() => startScaleAnimation('kampusHaritasi')}
          >
            <Image source={require('../MenuScreen/mmap.png')} style={styles.topicImage} />
            <Text style={styles.topicText}>Kampüs Haritası</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={[styles.topicButton, { transform: [{ scale: scaleValues.ogrenciKlup }] }]}
            onPress={() => startScaleAnimation('ogrenciKlup')}
          >
            <Image source={require('../MenuScreen/mogrenciklup.png')} style={styles.topicImage} />
            <Text style={styles.topicText}>Öğrenci Kulüpleri</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={[styles.topicButton, { transform: [{ scale: scaleValues.yemekList }] }]}
            onPress={() => startScaleAnimation('yemekList')}
          >
            <Image source={require('../MenuScreen/myemeklist.png')} style={styles.topicImage} />
            <Text style={styles.topicText}>Yemek Listesi</Text>
          </TouchableOpacity> */}

          <Link href="/etkinliktakvimi" asChild>
              <Pressable  style={styles.topicButton}>
                {() => <Image source={require('../MenuScreen/metkinlik.png')} style={styles.topicImage}  />}
              </Pressable>
            </Link>

          <TouchableOpacity
            style={[styles.topicButton, { transform: [{ scale: scaleValues.kutuphane }] }]}
            onPress={() => startScaleAnimation('kutuphane')}
          >
            <Image source={require('../MenuScreen/mlibraryicon.png')} style={styles.topicImage} />
            <Text style={styles.topicText}>Kütüphane</Text> 
          </TouchableOpacity> 
          {/* Diğer düğmeler için aynı şekilde ekleme yap. */}
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginTop:50,
    
  },
  topTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: 'center',
  },
  topText: {
    
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#164863',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  topicButton: {
    backgroundColor: '#427D9D',
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '49%', // %30 genişlikte (2 sütunlu)
  },
  topicImage: {
    width: '92%', // Image'ın tamamını kaplaması için
    height:  120, // Image'ın tamamını kaplaması için
    marginBottom: 5,
    borderRadius: 5, // İhtiyaca göre ayarlayın
    
  },
  topicText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default  TabOneScreen; 