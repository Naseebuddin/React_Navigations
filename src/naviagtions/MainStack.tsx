import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import { SearchScreen } from '../Screens';

export type MainStack = {
    BottomTabs :any;
    SearchScreen:any
}

const Stack = createNativeStackNavigator<MainStack>();

const MainStack = () => {
  return (
    <>
    <Stack.Screen name={"BottomTabs"} component={BottomTabs}/>
    <Stack.Screen name={"SearchScreen"} component={SearchScreen}/>
    </>

  )
}

export default MainStack
