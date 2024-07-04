import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../../theme";
import { ScrollView } from "react-native-virtualized-view";
import { Entypo } from "@expo/vector-icons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ProductData } from "../../data";
const Card = ({ item }) => {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={item.image}
            style={styles.image}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.sponsored}>Sponsered</Text>
          <Text numberOfLines={3} style={styles.description}>
            {item.productName}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>3.8</Text>
            <View style={styles.starContainer}>
              <Entypo name="star" size={12} color={COLORS.orange} />
              <Entypo name="star" size={12} color={COLORS.orange} />
              <Entypo name="star" size={12} color={COLORS.orange} />
              <Entypo name="star" size={12} color={COLORS.orange} />
              <Entypo name="star" size={12} color={COLORS.orange} />
            </View>
            <Text style={styles.rating}>3900</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}> ₹{item.price}</Text>
            <Text style={styles.mrp}>MRP {item.crossOutText}</Text>
          </View>

          <Text style={styles.cashback}>
            Upto 5% cashback with Amazon Pay credit card
          </Text>

          <Image
            resizeMode="contain"
            source={require("../../assets/prime.png")}
            style={styles.amazonIcon}
          />

          <Text style={styles.cashback}>Free delivery by Monday 19th May</Text>
        </View>
      </View>
    </View>
  );
};

const SeeAllDealsScreen = () => {
  return (
    <View style={{marginBottom: useBottomTabBarHeight()}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Header showBackButton={true} />
        </View>
        <FlatList
          data={ProductData}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default SeeAllDealsScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    height: hp("25%"),
  },
  imageContainer: {
    backgroundColor: "lightgray",
    width: "40%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  descriptionContainer: {
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sponsored: {
    color: COLORS.gray,
    fontSize: hp(1.5),
    marginBottom: hp(".5%"),
  },
  description: {
    fontSize: hp(1.8),
    marginBottom: hp(".5%"),
    fontWeight: "500",
  },
  starContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: wp("1%"),
  },
  rating: {
    fontSize: hp(1.4),
    fontWeight: "500",
    color: COLORS.primary,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 5,
    alignItems: "center",
  },
  price: {
    fontSize: hp(2.1),
    fontWeight: "500",
  },
  mrp: {
    fontSize: hp(1.3),
    fontWeight: "500",
    color: COLORS.darkGray,
    textDecorationLine: "line-through",
  },
  cashback: {
    fontSize: hp(1.4),
    color: COLORS.gray,
    marginVertical: hp('.5%')
  },
  amazonIcon: {
    width: "24%",
    height: hp(2),
  },
});
