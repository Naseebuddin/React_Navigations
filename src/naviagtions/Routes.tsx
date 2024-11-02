import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Signup} from '../Screens';
import BottomTabs from './BottomTabs';

export type ScreenType = {
  Home: any;
  Login: any;
  Signup: any;
  BottomTabs:any
};

const Stack = createNativeStackNavigator<ScreenType>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}>
        <Stack.Screen name={"BottomTabs"} component={BottomTabs}/>
        <Stack.Screen name={'Signup'} component={Signup} />
        <Stack.Screen name={'Login'} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
