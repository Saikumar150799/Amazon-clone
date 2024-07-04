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
import { Formik } from "formik";
import { Dropdown } from "react-native-element-dropdown";
import { ADDRESS_FORM_INITIAL_VALUES } from "../../forms/initialValues";
import { ADDRESS_FORM_SCHEMA } from "../../forms/schema";
import { countryCode } from "../../data";
import { useAddressStore } from "../../store";

const AddressFormScreen = () => {
  const navigation = useNavigation();

  const addAddress = useAddressStore((state) => state.addAddress);

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 20 }}
          keyboardDismissMode="on-drag"
        >
          <Formik
            initialValues={ADDRESS_FORM_INITIAL_VALUES}
            validationSchema={ADDRESS_FORM_SCHEMA}
            onSubmit={(values) => {
              addAddress({ ...values, id: Math.random() });
              navigation.goBack();
            }}
          >
            {({ values, handleChange, touched, handleSubmit, errors }) => (
              <>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Add a new Address</Text>
                  <Dropdown
                    style={[styles.input]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={countryCode}
                    search
                    containerStyle={styles.containerStyle}
                    itemContainerStyle={styles.itemContainerStyle}
                    itemTextStyle={styles.itemTextStyle}
                    maxHeight={300}
                    labelField="country"
                    valueField="country"
                    placeholder={"Select country"}
                    searchPlaceholder="Search..."
                    value={values.country}
                    onChange={(item) => {
                      handleChange("country")(item.country);
                    }}
                  />
                  <Text style={styles.error}>
                    {errors.country && errors.country}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>
                    Full Name (First Name and Last Name)
                  </Text>
                  <TextInput
                    placeholder="Enter your name"
                    style={styles.input}
                    value={values.name}
                    onChangeText={handleChange("name")}
                  />
                  <Text style={styles.error}>{errors?.name}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Country Code</Text>
                  <TextInput
                    placeholder="Enter country code"
                    style={styles.input}
                    value={values.code}
                    onChangeText={handleChange("code")}
                    />
                     <Text style={styles.error}>{errors?.code}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Phone Number</Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Enter your phone number"
                    style={styles.input}
                    value={values.phoneNumber}
                    onChangeText={handleChange("phoneNumber")}
                  />
                  <Text style={styles.error}>
                    {errors.phoneNumber && errors.phoneNumber}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>
                    Flat, Building, etc. (Optional)
                  </Text>
                  <TextInput
                    placeholder="Enter your flat, building, etc."
                    style={styles.input}
                    value={values.flat}
                    onChangeText={handleChange("flat")}
                  />
                  <Text style={styles.error}>{errors.flat && errors.flat}</Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Area, Street, Village,</Text>
                  <TextInput
                    placeholder="Enter your area, street, village"
                    style={styles.input}
                    value={values.street}
                    onChangeText={handleChange("street")}
                  />
                  <Text style={styles.error}>
                    {errors.street && errors.street}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Landmark</Text>
                  <TextInput
                    placeholder="Eg near school"
                    style={styles.input}
                    value={values.landmark}
                    onChangeText={handleChange("landmark")}
                  />
                  <Text style={styles.error}>
                    {errors.landmark && touched.landmark ? (
                      <Text>{errors.landmark}</Text>
                    ) : null}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>State</Text>
                  <TextInput
                    placeholder="Enter state"
                    style={styles.input}
                    value={values.state}
                    onChangeText={handleChange("state")}
                  />
                  <Text style={styles.error}>
                    {errors.state && errors.state}
                  </Text>
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.title}>Pincode</Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Enter pincode"
                    style={styles.input}
                    value={values.pinCode}
                    onChangeText={handleChange("pinCode")}
                  />
                  <Text style={styles.error}>
                    {errors.pinCode && errors.pinCode}
                  </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Add Address</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
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
    marginBottom: 5,
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
  placeholderStyle: {
    fontSize: hp(1.6),
    color: COLORS.darkGray,
  },
  inputSearchStyle: {
    fontSize: hp(1.6),
    borderRadius: 5,
  },
  containerStyle: {
    // borderWidth: 1,
    // borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  itemContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    // backgroundColor: 'green',
  },
  selectedTextStyle: {
    color: COLORS.primary,
  },
  itemTextStyle: {
    // borderBottomWidth: 1,
    borderBottomColor: COLORS.darkGray,
    textTransform: "capitalize",
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
  error: {
    color: COLORS.red,
  },
});
