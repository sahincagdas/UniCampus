import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import Slider from '../components/Slider';


const Page = () => {
    const router = useRouter();

  return (
    <View>
      <Slider/>
    </View>
  )
}

export default Page