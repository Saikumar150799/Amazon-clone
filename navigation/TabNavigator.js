import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  CarStackScreen,
  HomeStackScreen,
  ProfileStackScreen,
} from "./StackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import MenuScreen from "../scrrens/Menu/MenuScreen";
import { useCartStore } from "../store";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const cartLength = useCartStore((state) => state.cartLength());
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{ headerShown: false, tabBarStyle: {borderTopWidth: 0} }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? COLORS.primary : "gray";
            const iconName = focused ? "home" : "home-outline";

            return (
              <MaterialCommunityIcons
                name={iconName}
                color={iconColor}
                size={size}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 600,
          },
          tabBarLabel: ({ focused, color, size }) => {
            const labelColor = focused ? COLORS.primary : "gray";
            return (
              <Text
                style={{ color: labelColor, fontSize: 12, fontWeight: 600 }}
              >
                Home
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? COLORS.primary : "gray";
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={iconColor}
              />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 600,
          },
          tabBarLabel: ({ focused, color, size }) => {
            const labelColor = focused ? COLORS.primary : "gray";
            return (
              <Text
                style={{ color: labelColor, fontSize: 12, fontWeight: 600 }}
              >
                Profile
              </Text>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CarStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? COLORS.primary : "gray";
            return (
              <AntDesign name="shoppingcart" size={size} color={iconColor} />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 600,
          },
          tabBarBadge: cartLength > 0 ? cartLength : null,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.red,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -5,
            right: -5,
          },
          tabBarLabel: ({ focused, color, size }) => {
            const labelColor = focused ? COLORS.primary : "gray";
            return (
              <Text
                style={{ color: labelColor, fontSize: 12, fontWeight: 600 }}
              >
                Cart
              </Text>
            );
          },
        }}
      />
       <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            const iconColor = focused ? COLORS.primary : "gray";
            return (
              <Feather name="menu" size={size} color={iconColor} />
            );
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 600,
          },
  
          tabBarLabel: ({ focused, color, size }) => {
            const labelColor = focused ? COLORS.primary : "gray";
            return (
              <Text
                style={{ color: labelColor, fontSize: 12, fontWeight: 600 }}
              >
                Menu
              </Text>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
