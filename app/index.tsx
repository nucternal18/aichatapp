import { View, Text } from 'react-native'
import React from 'react'
import AnimatedIntro from '@/components/animated-intro'
import BottomLoginSheet from '@/components/bottom-login-sheet'

export default function Index() {
  return (
    <View style={{ flex: 1}}>
     <AnimatedIntro />
     <BottomLoginSheet />
    </View>
  )
}