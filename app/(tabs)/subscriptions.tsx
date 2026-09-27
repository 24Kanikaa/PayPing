import { View, Text } from 'react-native'
import React from 'react'
import { styled } from "nativewind";
import { SafeAreaView as RNDSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNDSafeAreaView)
const subscriptions = () => {
  return (
    <SafeAreaView className=" flex-1 bg-background p-5">
      <Text>subscriptions</Text>
    </SafeAreaView>
  )
}

export default subscriptions