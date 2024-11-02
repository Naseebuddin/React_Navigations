import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Signup} from '../Screens';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export type ScreenType = {
  Home: any;
  Login: any;
  Signup: any;
  BottomTabs:any
};

const Stack = createNativeStackNavigator<ScreenType>();

const Routes = () => {

  const isAuthToken = false

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}>
        {isAuthToken ?  AuthStack() : MainStack() }

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
