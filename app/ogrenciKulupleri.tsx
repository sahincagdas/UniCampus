import React from 'react';
import { FlatList, StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../components/Themed';
import { Link } from 'expo-router';
import kulupData from "../components/data/kulupData";

const KulupListesi = () => {
  const sortedData = kulupData.sort((a, b) => a.kulupadı.localeCompare(b.kulupadı));
  
  return (
    <View style={styles.container}>
      <FlatList
        data={sortedData}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/kulupdetay', params: { id: item.id } }} asChild>
            <Pressable style={styles.kulupItem}>
              <Text style={styles.text}>{item.kulupadı}</Text>
            </Pressable>
          </Link>
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
  },
  kulupItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    color: "#164863",
    fontSize: 16,
  }
});

export default KulupListesi;
