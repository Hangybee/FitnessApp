import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExerciseList = ({exercise}) => {
    const ExerciseCard = () =>{
        return(
            <Text>abcdd</Text>
        )
    }
  return (
    <View>
      <FlatList
        data={exercise}
        renderItem={ExerciseCard}
        numColumns={2}
         keyExtractor={item=>item.name}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{}}
         columnWrapperStyle={{justifyContent:'space-between', marginHorizontal:10}}
      />
    </View>
  )
}

export default ExerciseList

const styles = StyleSheet.create({})