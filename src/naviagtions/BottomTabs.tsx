import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Explore, Home, Profile} from '../Screens';
import imagePath from '../constant/imagePath';

export type bottomTabsTypesa = {
  Home: any;
  Explore: any;
  Profile: any;
  Chat: any;
};

const Tab = createBottomTabNavigator<bottomTabsTypesa>();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? imagePath.home : imagePath.homeUnsc}
              style={{width: 24, height: 24}}
            />
          ),
          title: ({ focused }: { focused: boolean }) => (
            <Text style={{ color: focused ? 'green' : 'black' }}>
              {'Home Tab'}
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name={'Explore'}
        component={Explore}
        options={{
          tabBarIcon: ({}) => (
            <Image style={{width: 24, height: 24}} source={imagePath.explore} />
          ),
        }}
      />
      <Tab.Screen
        name={'Chat'}
        component={Chat}
        options={{
          tabBarIcon: ({}) => (
            <Image style={{width: 24, height: 24}} source={imagePath.chat} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({}) => (
            <Image style={{width: 24, height: 24}} source={imagePath.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
