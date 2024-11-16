import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {EditProfile, Message, Settings} from '../Screens';

export type TopTabBar = {
  EditProfile: any;
  Message: any;
  Setting: any;
};

const Tab = createMaterialTopTabNavigator<TopTabBar>();

const TopTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'EditProfile'} component={EditProfile} />
      <Tab.Screen name={'Message'} component={Message} />
      <Tab.Screen name={'Setting'} component={Settings} />
    </Tab.Navigator>
  );
};

export default TopTabBar;
