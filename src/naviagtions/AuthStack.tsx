import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../Screens';

export type authStackScreen = {
  Login: any;
  Signup: any;
};

const Stack = createNativeStackNavigator<authStackScreen>();

const AuthStack = () => {
  return (
    <>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Signup'} component={Signup} />
    </>
  );
};

export default AuthStack;
