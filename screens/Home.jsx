import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ChevronLeftIcon, Bell, BellAlertIcon } from 'react-native-heroicons/solid';
import ImageSlider from '../component/ImageSlider';
import BodyParts from '../component/BodyParts';

const Home = () => {
    return (
        <View className="mt-5 mb-96 flex:1 " >
            <View className="flex-row justify-between items-center mx-3">
                <View className="spae-y-2 ">
                    <Text style={{ fontSize: hp(4.5) }} className="tracking-wider font-bold text-neutral-700">READY TO </Text>
                    <Text style={{ fontSize: hp(4.5) }} className="tracking-wider font-bold text-rose-500">WORKOUT</Text>
                </View>
                <View className="items-center justify-center flex space-y-2">
                    <Image source={require("../assets/images/profile_pic.png")} style={{ height: hp(10), width: hp(10) }} className="rounded-full" />
                    <View style={{ height: hp(5.5), width: hp(5.5) }} className=" bg-neutral-200 justify-center items-center rounded-full border-[3px] border-neutral-300">
                        <BellAlertIcon size={hp(3)} strokeWidth={2.5} color={"gray"} />
                    </View>
                </View>
            </View>
            <View>
                <ImageSlider />
            </View>
            <View className="mb-96">
                <BodyParts />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})