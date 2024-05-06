import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { useRoute } from '@react-navigation/native'

const Score = ({navigation}) => {
    const route = useRoute()
    const {score} = route.params
    return (
        <View style={tw`flex-1 items-center`}>
            <Image 
                source={require("../../assets/celebrate.png")}
                style={tw.style(tw`h-3/6`,{aspectRatio:1})}
            />

            <Text>Congratulations !! Your Scored {score} points</Text>
        
            <Pressable style={tw`bg-purple-500 rounded-md mt-4`} onPress={()=>navigation.navigate('Splash')}>
                <Text style={tw`text-white text-lg px-4 py-2`}>Play Again</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Score

