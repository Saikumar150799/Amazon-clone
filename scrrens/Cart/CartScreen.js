import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Divider, ProgressBar } from "react-native-paper";
import { Checkbox } from "react-native-paper";
import { COLORS } from "../../theme";
import { ScrollView } from "react-native-virtualized-view";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import CartItem from "../../components/CartItem";
const CartScreen = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.subtotal}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>₹8793</Text>
        </View>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            color={COLORS.darkGreen}
            progress={0.5}
            style={styles.progressBar}
          />
          <Text style={styles.progressBarText}>₹499</Text>
        </View>
        <Text style={styles.addItemsWorth}>
          Add items worth ₹300.00 for FREE Delivery.
        </Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Buy (1 item)</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <Checkbox.Android
            status={checked ? "checked" : "unchecked"}
            mode="android"
            onPress={() => {
              setChecked(!checked);
            }}
            color={COLORS.primary}
          />
          <Text style={styles.checkboxText}>
            Send as a gift. Incluse custom message
          </Text>
        </View>

        <Divider bold={true} />
          {Array.from({length: 10}).map((_, index) => (
            <CartItem key={index} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  subtotal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
  },
  subtotalText: {
    fontSize: hp(2.5),
  },
  subtotalPrice: {
    fontSize: hp(3),
    fontWeight: "bold",
    marginLeft: wp(2),
  },
  progressBar: {
    width: wp("80%"),
    height: hp(2),
    borderRadius: 10,
  },
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: hp(2),
  },
  progressBarText: {
    fontSize: hp(2),
    marginLeft: wp(2),
  },
  addItemsWorth: {
    fontSize: hp(2),
  },
  checkoutButton: {
    backgroundColor: COLORS.yellow,
    padding: 15,
    borderRadius: 10,
    marginTop: hp(2),
    marginBottom: hp(2.5),
  },
  checkoutButtonText: {
    fontSize: hp(2),
    textAlign: "center",
  },
  checkbox: {
    width: wp(20),
    height: hp(20),
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(2),
  },
  checkboxText: {
    fontSize: hp(2),
    marginLeft: wp(2),
  },
  ItemContainer: {
    flexDirection: "row",
    marginBottom: hp(2),
    gap: wp(2),
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    marginTop: hp(2),
  },
  imageContainer: {
  },
  image: {
    width: wp("40%"),
    height: hp("20%"),
    alignSelf: "center",
  },
  Item: {
    flex: 1,
  },
  title: {
    fontSize: hp(1.8),
    fontWeight: "500"
  },
  discount: {
    backgroundColor: COLORS.red,
    padding: 8,
    width: wp("20%"),
    marginVertical: hp(1),
  },
  discountText: {
    fontSize: hp(1.5),
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    fontSize: hp(2),
    fontWeight: "bold",
  },
  shipping: {
    fontSize: hp(1.7),

  },
  stock: {
    fontSize: hp(1.7),
    color: COLORS.green,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("40%"),
    justifyContent: "space-between",
    borderWidth: 1.5,
    borderColor: COLORS.darkGray,
    borderRadius: 5,
  },
  quantityButton: {
    backgroundColor: COLORS.gray,
    padding: 8,
  },
  borderRight: {
    borderRightWidth: 1.5,
    borderColor: COLORS.darkGray,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  borderLeft: {
    borderLeftWidth: 1.5,
    borderColor: COLORS.darkGray,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  quantityText: {
    fontSize: hp(2.5),
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 11,
    borderRadius: 5,
    marginLeft: wp(3),
    borderWidth: 1.5,
    borderColor: COLORS.darkGray,
  },
});
