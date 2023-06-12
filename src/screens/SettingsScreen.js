import { Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SettingsScreen(props) {

    const { navigation } = props

    const goToPage = (pageName) => {
        navigation.navigate(pageName)
    }
  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage('Home')} title='Go to Settings'/>
    </SafeAreaView>
  )
}