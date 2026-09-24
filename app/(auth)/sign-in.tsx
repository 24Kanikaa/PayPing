import { View, Text } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

const signIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up">sign-up</Link>
    </View>
  )
}

export default signIn