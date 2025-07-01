import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from "../../components/Themed";
import { Link } from 'expo-router';

import EditScreenInfo from '../../components/EditScreenInfo';
//import { Text, View, } from '../../components/Themed';
import { Avatar, Button, Divider, Icon } from 'react-native-elements';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
    <View style={styles.headerContainer}>
      <Avatar 
        size="xlarge"
        rounded
        source={{ uri: 'https://buraya-avatar- linki-gelecek.jpg' }}
      />
      <Text style={styles.userName}>Çağdaş Şahin</Text>
      <Text style={styles.userBio}>Bilgisayar Mühendisliği</Text>
    </View>

    <Divider style={styles.divider} />

    <TouchableOpacity style={styles.button} onPress={() => alert('Düzenle tıklandı')}>
      <Icon name="edit" type="material" color="white" />
      <Text style={styles.buttonText}>Profili Düzenle</Text>
    </TouchableOpacity>

    <Divider style={styles.divider} />

    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>E-posta: sahin.cagdas@outlook.com</Text>
      <Text style={styles.infoText}>Telefon: +90 554 264 52 06</Text>
      <Text style={styles.infoText}>Doğum Tarihi: 31 Mayıs 1994</Text>
      <Text style={styles.infoText}>Cinsiyet: Erkek</Text>
      <Text style={styles.infoText}>Konum: Tokat</Text>
    </View>

    <Divider style={styles.divider} />

    
    <TouchableOpacity style={styles.button} onPress={() => alert('Çıkış yap tıklandı')}>
      <Text style={styles.buttonText}>Çıkış Yap</Text>
    </TouchableOpacity>

    <Divider style={styles.divider} />
    

   

  </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  userBio: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#164865',
    padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  infoContainer: {
    marginBottom: 0,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
  },
});
