import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import {TabNavigator} from 'react-native-gesture-handler';
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Liked from './components/Liked';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from './assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

Entypo.loadFont();
const TabNavigator = () =>{
  return(
    <Tab.Navigator
    // lazy={false}
  // optimizationsEnabled={true}
  // tabBarOptions={tabBarOptions}
      Options={{
        style: styles.tabBar,
        activeTintColor: colors.orange,
        inactiveTintColor: colors.gray,
        showLabel: false,
      }}




    >
      <Tab.Screen name="Home" 
      component={Home} 
        options={{
          tabBarIcon: ({color}) =>( 
          <Entypo name="home" size={32} color={color} />
          ),}}
      />
      <Tab.Screen name="Liked" component={Liked}
      options={{
        tabBarIcon: ({color}) =>( 
        <Entypo name="heart" size={32} color={color} />
        ),}} />
      <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarIcon: ({color}) =>( 
        <MaterialCommunityIcons name="account" size={32} color={color} />
        ),}} />
    </Tab.Navigator>
  );
};









export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" 
        component={TabNavigator} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    
});


