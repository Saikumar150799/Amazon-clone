import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Button, Card } from "react-native-paper";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Address = () => {
  return (
      <Card contentStyle={{ backgroundColor: COLORS.white,marginBottom:10 }}>
        <Card.Content>
          <Text style={styles.title}>Saikumar</Text>
          <Text style={styles.text}>+91 9876543210</Text>
          <Text style={styles.text}>
            Flat 101, Building 101, 101 Main Street, Indiranagar
          </Text>
          <Text style={styles.text}>BENALURU, Karnataka 560103</Text>
          <Text style={styles.text}>Phone Number: 560103</Text>
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Set as Default</Text>
            </TouchableOpacity>
          </View>
        </Card.Content>
      </Card>
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
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 3.84,
    elevation: 5,
  },

});
