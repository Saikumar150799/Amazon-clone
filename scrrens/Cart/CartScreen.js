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
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CartItem from "../../components/CartItem";
import { useCartStore } from "../../store";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
const CartScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = React.useState(false);
  const cartData = useCartStore((state) => state.products);
  const cartTotal = useCartStore((state) => state.cartTotal());
  const cartLength = useCartStore((state) => state.cartLength());

  console.log("cart", cartTotal);

  return (
    <>
      {cartTotal === 0 ? (
        <ScrollView>

        <View style={styles.emptyCart}>
          <Image resizeMode="contain" source={require("../../assets/emptyCart.webp"  )}  style={styles.emptyCartImage}/>
          <Text style={styles.emptyText}>Your Amazon Cart is empty</Text>
        </View>
        </ScrollView>
      ) : (
        <SafeAreaView style={{ flex: 1 }}>
          <Header />
          <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.subtotal}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={styles.subtotalPrice}>₹{cartTotal}</Text>
            </View>
            <View style={styles.progressBarContainer}>
              <ProgressBar
                color={COLORS.darkGreen}
                progress={cartTotal >= 300 ? 1 : cartTotal / 300}
                style={styles.progressBar}
              />
              <Text style={styles.progressBarText}>₹499</Text>
            </View>
            {cartTotal >= 300 && (
              
              <View style={styles.freeDelivery} >
            <Ionicons name="checkmark-circle" size={24} color={COLORS.green} />
              <Text style={styles.freeDeliveryText}>Your order is eligible for FREE Delivery.</Text>
            </View>
            )}
            <Text style={styles.addItemsWorth}>
              Add items worth ₹300.00 for FREE Delivery.
            </Text>

            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>
                Proceed to Buy (1 item)
              </Text>
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
            {cartData.map((item, index) => (
              <CartItem key={index} product={item} />
            ))}
          </ScrollView>
        </SafeAreaView>
      )}
    </>
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
    marginBottom: hp(1),
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
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    marginTop: hp(2),
  },
  imageContainer: {},
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
    fontWeight: "500",
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
  emptyCart: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartImage: {
    width: wp("100%"),
    height: hp("80%"),
  },
  emptyText: {
    fontSize: hp(3),
    textAlign: "center",
    fontWeight: "bold",
    bottom: hp("20%"),
  },
  freeDelivery: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(2),
    marginBottom: hp(1),

  },
  freeDeliveryText: {
    fontSize: hp(2),
    color: COLORS.green,
  },
});
