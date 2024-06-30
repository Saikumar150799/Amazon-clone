import { Pressable, StyleSheet, Text } from "react-native";
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

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  const getCategories = useCallback(async () => {
    try {
      const categories = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(categories.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  }, []);

  const getProducts = useCallback(async () => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      setProducts(products.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  }, []);

  useEffect(() => {
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);

  return (
    <>
      <SafeAreaView>
        <Header />
        <Pressable
          style={styles.locationContainer}
          onPress={() => navigation.navigate("Address")}
        >
          <Ionicons name="location-outline" size={22} color="black" />
          <Text>Deliver to Saikumar - Banaglore 560032</Text>
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
    borderTopWidth: 1,
    borderTopColor: COLORS.primary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.primary,
    padding: 10,
    backgroundColor: COLORS.secondary,
  },
});
