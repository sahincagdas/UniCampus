import { Animated, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef, useState } from 'react';
import Slides from '../components/data/index';
import SlideItem from './SlideItem';
import Pagination from './Pagination';
import { useNavigation } from '@react-navigation/native';

const Slider = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

 
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate('Giris'); // 'Menu' ekranına yönlendir
  };

  return (
    <View>
      <FlatList
        data={Slides}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={Slides} scrollX={scrollX} index={index} />

      {/* Yeni eklenen buton */}
      <TouchableOpacity onPress={handleButtonPress} style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonText}>Geç</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Yeni eklenen buton stili
  buttonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 50,
    marginRight: 20,
    backgroundColor: '#164863',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    right: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Slider;
