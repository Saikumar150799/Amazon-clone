import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { COLORS } from "../theme";
const CartItem = () => {
  return (
    <View>
      <View style={styles.ItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/avatar.webp")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.Item}>
          <Text style={styles.title} numberOfLines={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit weiurh weur
            hiwhue r.
          </Text>
          <Text style={{ marginVertical: hp(0.5) }}>
            6k + bought in past month
          </Text>
          <View style={styles.discount}>
            <Text style={styles.discountText}>73% Off</Text>
          </View>
          <View>
            <Text style={styles.price}>₹499</Text>
          </View>
          <Text style={styles.shipping}>Eligible for FREE Shipping</Text>
          <Text style={styles.stock}>In stock</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <View style={styles.quantityButtonContainer}>
          <TouchableOpacity style={[styles.quantityButton, styles.borderRight]}>
            <MaterialIcons name="delete-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.quantityButton, styles.borderLeft]}>
            <Entypo name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
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
