import { ImageBackground, StatusBar, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
const Welcome = () => {

    const navigation = useNavigation()
    return (
        <View className="flex-1">
            <StatusBar
                animated={true}
                backgroundColor="black"
                showHideTransition={true}
                hidden={false}
            />
            <ImageBackground className="flex-1" source={require("../assets/images/welcome.jpg")}>
                <View className="items-center justify-end flex-1">
                    <Animated.View entering={FadeInDown.delay(100).springify()}>
                        <Text className="text-5xl font-bold text-white">Best <Text className="text-red-500">Workouts</Text> </Text>
                        <Text className="text-3xl font-bold text-white">For You</Text>
                    </Animated.View>
                    <Animated.View entering={FadeInDown.delay(200).springify()} className="h-11 w-72 border-[2px] border-neutral-50 items-center justify-center bg-red-500 rounded-2xl mb-5 mt-3">
                        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                            <Text className="text-white text-xl font-bold text-center ">Get Started</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({})