import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useAddressStore } from "../store";
const Address = ({ address }) => {
  const setDefaultAddress = useAddressStore((state) => state.setDefaultAddress);

  console.log("Address")
  const country = address.country.split(" ")[0];
  return (
    <View style={{marginBottom: hp(1)}}>

      <Card contentStyle={{ backgroundColor: COLORS.white }}>
        <Card.Content>
          <Text style={styles.title}>{address.name}</Text>
          <Text style={styles.text}>+{address.code} {address.phoneNumber}</Text>
          <Text style={styles.text}>
            {address.address}
          </Text>
          <Text style={styles.text}>{address.flat}{address.street}{address.landmark}</Text>
            <Text style={styles.text}>{country}</Text>
          <Text style={styles.delivery}>Add delivery instructions</Text>
          <View style={styles.row}>
            <Ionicons name="location" size={22} color={COLORS.red} />
            <Text style={styles.delivery}>Update delivery location</Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setDefaultAddress(address.id)}>
              <Text style={styles.buttonText}>Set as Default</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  title: {
    fontSize: hp(2.3),
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: hp(2),
    marginBottom: 3,
  },
  delivery: {
    fontSize: hp(2),
    marginBottom: 5,
    marginTop: 5,
    color: COLORS.primary
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
  },

});
