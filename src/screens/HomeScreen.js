import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
    const { navigation } = props

    const goToSettiings = () => {
        navigation.navigate("Settings")
    }

    return (
        <View>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Button onPress={goToSettiings} title='Go to Settings'/>
        </View>
    )
}