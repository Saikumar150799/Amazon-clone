import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomStatusBar from "../../components/StatusBar";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";
import { Avatar } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Chip from "../../components/Chip";
import { Badges } from "../../data.js";
import ChipComponent from "../../components/Chip";
import { useNavigation } from "@react-navigation/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: -getStatusBarHeight() }}>
        <CustomStatusBar style="dark" backgroundColor={COLORS.primary} />
        <LinearGradient
          colors={[COLORS.primary, COLORS.secondary]}
          style={styles.header}
        >
          <Image
            source={require("../../assets/Amazon icon.webp")}
            style={styles.logo}
          />
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Ionicons name="search" size={24} color="black" />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.profile}>
          <Avatar.Image
            size={40}
            source={require("../../assets/avatar.webp")}
          />
          <Text style={styles.profileText}> Hello, Saikumar</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </View>
        <View style={styles.language}>
          <Image
            source={require("../../assets/flag.png")}
            style={styles.flag}
          />
          <Text>EN</Text>
        </View>
      </View>
      <View style={styles.badges}>
        {Badges.map((item) => (
          <ChipComponent key={item.id} mode="outlined" name={item.name} />
        ))}
      </View>
      
      <View style={styles.ordersContainer}>
        
      <Text style={styles.orders}>Your Orders</Text>

      <Text style={styles.noOrders}>Hi! You have no recent orders.</Text>

      <TouchableOpacity style={styles.returnHome} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.returnHomeText}>Return to the HomePage</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  subContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  logo: {
    width: wp("30%"),
    height: hp("7%"),
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileText: {
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  flag: {
    width: 25,
    height: 20,
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ordersContainer: {
    padding: 10,
  },
  orders: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
  },
  noOrders: {
    fontSize: hp("2%"),
    marginVertical: 10,
  },
  returnHome: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.darkGray,

  },
  returnHomeText: {
    fontSize: hp("2%"),
    textAlign: "center",
  },
});
