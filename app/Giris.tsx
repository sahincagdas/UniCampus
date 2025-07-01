import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from '../components/Themed';

const Giris = () => {
    const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Burada login işlemleri gerçekleştirilebilir
    console.log('Email:', email);
    console.log('Password:', password);
    // Örneğin: API çağrısı veya doğrulama işlemi

    // Başarılı giriş sonrası bir sonraki sayfaya yönlendirme örneği
    navigation.navigate("(tabs)");
  };
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Giriş Yap</Text>
    <TextInput
      style={styles.input}
      placeholder="E-posta"
      keyboardType="email-address"
      autoCapitalize="none"
      value={email}
      onChangeText={(text) => setEmail(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Şifre"
      secureTextEntry
      value={password}
      onChangeText={(text) => setPassword(text)}
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Giriş Yap</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.registerLink}>
      <Text style={styles.registerText} onPress={() => navigation.navigate('KayitOl')}>
        Hesabınız yok mu?  Kayıt Olun
      </Text>
    </TouchableOpacity>
  </View>
);
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#fff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#164863',
    },
    input: {
      width: '100%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 2,
      borderRadius: 15,
      marginBottom: 15,
      padding: 10,
      
    },
    button: {
      backgroundColor: '#164863',
      padding: 10,
      borderRadius: 15,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    registerLink: {
      marginTop: 20,
    },
    registerText: {
      color: '#427D9D',
      fontSize: 16,
    },
  });
  

export default Giris