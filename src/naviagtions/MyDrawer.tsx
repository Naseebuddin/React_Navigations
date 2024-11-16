import {View, Text, Image} from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SearchScreen, Settings} from '../Screens';
import imagePath from '../constant/imagePath';

export type drawerTypes = {
  SearchScreen: any;
  SettingScreen:any
};
const Drawer = createDrawerNavigator<drawerTypes>();

const MyDrawer = () => {
  return (
    <>
      <Drawer.Navigator screenOptions={{drawerStyle:{
        backgroundColor:'white',
        width:200,
      }}}>
        <Drawer.Screen name={'SearchScreen'} 
        options={{drawerIcon:()=>(
          <Image 
          style={{width:24,height:24}}
          source={imagePath.explore}/>
        )}}
        component={SearchScreen} />
        <Drawer.Screen
        options={{drawerIcon:()=>(
          <Image source={imagePath.profile}
          style={{width:24,height:24}}
          />
        )}}
        name={'SettingScreen'} component={Settings} />
      </Drawer.Navigator>
    </>
  );
};

export default MyDrawer;
