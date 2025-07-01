import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ModalScreen() {
  return (
    
    <View style={styles.container}>
      <View >
        <Text style ={styles.header}>İletişim Bilgileri</Text>
      </View>
      <FontAwesome
                    name="exclamation"
                    size={25}
                    color={"#164863"}
                    style={{ marginRight: 15,  }}
                  />
      <Text style={styles.title}>+90 (356) 252 16 16</Text>
      <Text style={styles.title}>+90 (356) 252 16 25</Text>
      <Text style={styles.title}>Tokat Gaziosmanpaşa University, Taşlıçiftlik Campus, 60250 Tokat / TURKEY</Text>
      
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/modal.tsx" /> */}
      

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize: 24,
    fontWeight:"bold",
    marginBottom:20,
    color:"#164863",

  },
  title: {
    fontSize: 20,
    color:"#164863",
    textAlign:"center",
    marginTop:10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
