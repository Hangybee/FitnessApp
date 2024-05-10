import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchExerciseBodyPart } from '../api/ExerciseDB'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ChevronLeftIcon } from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import ExerciseList from './ExerciseList';

const Exercise = ({ route }) => {
  const [exercise, setExercise] = useState([])
  const navigation = useNavigation()
  useEffect(() => {
    if (route.params.item) getExercises(route.params.item.name)
  }, [route.params.item])

  const getExercises = async (bodyParts) => {
    let data = await fetchExerciseBodyPart(bodyParts)
    setExercise(data)
  }
  return (
    <ScrollView>
      <Image source={route.params.item.image}
        style={{ borderBottomLeftRadius:35, borderBottomRightRadius:35,width: wp(100), height: hp(45), position: "absolute" }}
      />
      <TouchableOpacity onPress={()=>navigation.goBack()} className="bg-rose-500 mt-4 ml-3 h-9 w-9 rounded-full items-center  justify-center">
        <ChevronLeftIcon size="35" strokeWidth={2} color={'white'} style={{alignSelf:'center'}} />
      </TouchableOpacity>
      <Text className="mt-72 font-bold text-lg text-black ml-3">Back Exercise</Text>
      <ExerciseList  exercise={exercise}/>
    </ScrollView>
  )
}

export default Exercise

const styles = StyleSheet.create({})