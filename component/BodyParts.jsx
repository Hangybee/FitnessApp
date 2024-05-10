import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { bodyParts } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const BodyParts = () => {
    const navigation = useNavigation()
    const BodyPartCard = ({ item, index }) => {
        return (
            <View className="mb-2">
                <TouchableOpacity id={index} style={{ width: wp(44), height: wp(52) }} onPress={()=>navigation.navigate('Exercise',{item:item})} >
                    <ImageBackground source={item.image} resizeMode='cover' style={{ width: wp(44), height: wp(52)}} className="rounded-[35px] absolute">
                        <LinearGradient
                            colors={['rgba(0,0,0,0.9)', 'transparent']}
                            style={{width:wp(44), height:hp(15)}}
                            start={{x:0.5,y:0}} end={{x:0.5, y:1}}
                            //locations={[0,0.5,0.6]}
                        />
                    </ImageBackground>
                    <Text className="text-white text-lg font-semibold mt-44  text-center">{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <Text className=" text-2xl font-bold text-neutral-700 mb-1 ml-5 mt-2">Exercises</Text>
            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <BodyPartCard item={item} />}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                contentContainerStyle={{ paddingHorizontal: 4,}}
            />
        </View>
    )
}

export default BodyParts

const styles = StyleSheet.create({})