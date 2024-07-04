import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import Address from "../../components/Address";
import { ScrollView } from "react-native-virtualized-view";
import { useAddressStore } from "../../store";

const AddressScreen = () => {
  const navigation = useNavigation();
  const addresses = useAddressStore((state) => state.address);

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton={true} />
      <ScrollView>
        <Text style={styles.title}>Your Address</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("AddressForm")}
        >
          <Text style={styles.buttonText}>Add a new address</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Add a new pickup location</Text>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </Pressable>
        {addresses.map((item) => (
          <Address key={item.id} address={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "bold",
    marginHorizontal: wp(2),
    marginVertical: hp(1.5),
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
    paddingHorizontal: wp(2),
    marginVertical: hp(0.8),
    borderRadius: hp(0.5),
    padding: 20,
    borderTopWidth: 1,
    borderColor: COLORS.darkGray,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray,
  },
  buttonText: {
    fontSize: hp(2),
  },
});
