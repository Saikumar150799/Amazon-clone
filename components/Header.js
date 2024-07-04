import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TextInput } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomStatusBar from "./StatusBar";
import { getStatusBarHeight } from "react-native-status-bar-height";
const Header = ({ showBackButton = false }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: -getStatusBarHeight() + hp("3%") }}>
        <CustomStatusBar style="dark" backgroundColor={COLORS.secondary} />
      <LinearGradient
        colors={[COLORS.primary, COLORS.secondary, COLORS.tertiary]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.headerContainer}>
          {showBackButton && (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          )}
          <View style={styles.searchInput}>
            <Feather name="search" size={20} color="black" />
            <TextInput placeholder="Search Amzon" style={styles.searchInput} />
            <Feather name="mic" size={22} color={COLORS.lightBlack} />
          </View>
          <TouchableOpacity style={styles.mic}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  backButton: {
    paddingRight: 10,
    marginLeft: -5,
  },
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    flex: 1,
    height: hp("4.5%"),
    paddingHorizontal: 5,
    borderRadius: 3,
  },
  mic: {
    marginLeft: 10,
  },
});
