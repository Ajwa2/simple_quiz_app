import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc"

const Splash = ({navigation}) => {
    return (
        <View style={tw`flex-1 items-center`}>
            <Image
                source={require("../../assets/Simg.png")}
                style={tw.style(tw`h-3/6`,{aspectRatio:1})}
            />

            <Text style={tw`text-2xl text-center mb-5`}>Instructions</Text>
            <View style={tw`bg-purple-500 p-2 rounded h-30 w-65 items-center justify-center`}>
                <Text style={tw`text-white text-4`}>Each quiz has four options</Text>
                <Text style={tw`text-white text-4`}>  Progress will be shown at top</Text>
                <Text style={tw`text-white text-4`}>Score would be shown at the end</Text>
            </View>

            <Pressable style={tw`bg-purple-500 mt-5 px-6 py-1 rounded`} onPress={()=> navigation.navigate('Question')}>
                <Text style={tw`text-white text-lg`}>Start</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({})

export default Splash

