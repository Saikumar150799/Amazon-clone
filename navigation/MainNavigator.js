import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './TabNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../scrrens/login/SignIn';
import SignUp from '../scrrens/login/SignUp';
import ProfileScreen from '../scrrens/Profile/ProfileScreen';

const StackNavigator = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
        <StackNavigator.Screen name="SignUp" component={SignUp} />
        <StackNavigator.Screen name="SignIn" component={SignIn} />
        <StackNavigator.Screen name="TabNavigator" component={TabNavigator} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
