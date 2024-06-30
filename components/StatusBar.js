import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StatusBar } from "expo-status-bar";
const CustomStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View
      style={{
        height:
          Platform.OS === "ios"
            ? getStatusBarHeight()
            : StatusBar.currentHeight,
        backgroundColor,
      }}
    >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
