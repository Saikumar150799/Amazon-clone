import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >

    <SafeAreaView style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../../assets/Amazon icon.webp")}
        style={styles.logo}
        />
      <Text style={styles.title}>Register To Your Account</Text>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
          </View>
          <View>
            <TextInput placeholder="Enter Your Name" />
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.icon}>
          <MaterialCommunityIcons name="email" size={24} color="black" />
          </View>
          <View>
            <TextInput placeholder="Enter Your Email" />
          </View>
        </View>
        <View style={styles.input}>
          <View style={styles.icon}>
          <AntDesign name="lock" size={24} color="black" />
          </View>
          <View>
            <TextInput placeholder="Enter Your Password" secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.forgotPassword}>
          <Text>Sign Up</Text>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.alreadyHaveAccount}>
          <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
        </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("90%"),
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    // justifyContent: 'center',
  },
  logo: {
    width: wp("90%"),
    height: hp("15%"),
  },
  title: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginBottom: 50,
  },
  inputContainer: {
    width: wp("90%"),
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.darkGray,
    width: wp("90%"),
    height: hp("5%"),
    borderRadius: 4,
    marginBottom: 20,
    fontSize: hp("3%"),
  },
  icon: {
    marginHorizontal: 5,
  },
  forgotPassword: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
  },
  forgotPasswordText: {
    color: COLORS.lighBlue,
  },
  buttonContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: wp("90%"),
  },
  button: {
    backgroundColor: COLORS.orange,
    width: wp("50%"),
    height: hp("5%"),
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  alreadyHaveAccount: {
    flexDirection: "row",
    width: wp("90%"),
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: COLORS.lighBlue,
    marginLeft: 5,
  },
  alreadyHaveAccountText: {
   
  },
});
