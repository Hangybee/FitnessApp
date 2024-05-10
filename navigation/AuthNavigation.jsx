import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Exercise from '../component/Exercise';
// import Home from '../screens/Welcome';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercise" component={Exercise} />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})