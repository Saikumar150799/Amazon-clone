import { Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../theme";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../../components/Categories";
import Sliders from "../../components/Sliders";
import Deals from "../../components/Deals";
import TodaysDeals from "../../components/TodaysDeals";
import Products from "../../components/Products";
import axios from "axios";
import { useState } from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../../data";
import { ActivityIndicator } from "react-native-paper";
import { useAddressStore } from "../../store";


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  const defaultAddress = useAddressStore((state) => state.getDefaultAddress());


  const getProducts = useCallback(async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      setProducts(products.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }, []);

  useEffect(() => {
    getProducts();
    console.log("defaultAddress========>>>>>", defaultAddress);
  }, [getProducts]);

  if (products.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView>
        <Header />
        <Pressable
          style={styles.locationContainer}
          onPress={() => navigation.navigate("Address")}
        >
          <Ionicons name="location-outline" size={22} color="black" />
          <Text>Deliver to {defaultAddress?.name} - {defaultAddress?.state} {defaultAddress?.pinCode}</Text>
          <Feather name="chevron-down" size={24} color="black" />
        </Pressable>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories categories={categories} />

          <Sliders />

          <Deals />

          <TodaysDeals />

          <Products products={products} />
        </ScrollView>
      </SafeAreaView>
      {/* <BottomSheet /> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    padding: 10,
    backgroundColor: COLORS.secondary,
  },
});
