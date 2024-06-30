import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../../theme";
import { TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
import CustomStatusBar from "../../components/StatusBar";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const AddressFormScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomStatusBar style="dark" backgroundColor={COLORS.primary} />
      <View
        style={{
          backgroundColor: COLORS.primary,
          height: getStatusBarHeight(),
        }}
      >
        <Button
          theme={{ colors: { primary: COLORS.black } }}
          style={styles.cancelButton}
          mode="text"
          onPress={() => navigation.goBack()}
        >
          CANCEL
        </Button>
      </View>
      <SafeAreaView
        style={[styles.container, { paddingTop: -getStatusBarHeight() }]}
      >
        <ScrollView style={{ paddingTop: 20 }} keyboardDismissMode="on-drag">
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Add a new Address</Text>
            <TextInput placeholder="India" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>
              Full Name (First Name and Last Name)
            </Text>
            <TextInput placeholder="Enter your name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Phone Number</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter your phone number"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Flat, Building, etc. (Optional)</Text>
            <TextInput
              placeholder="Enter your flat, building, etc."
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Area, Street, Village,</Text>
            <TextInput
              placeholder="Enter your area, street, village"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Landmark</Text>
            <TextInput placeholder="Eg near school" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Pincode</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Enter pincode"
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add Address</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AddressFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: hp(2),
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
    padding: 10,
  },
  button: {
    marginTop: 15,
    backgroundColor: COLORS.yellow,
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    fontSize: hp(2),
  },
  cancelButton: {
    width: wp("30%"),
    textAlign: "right",
    marginLeft: "auto",
  },
});
