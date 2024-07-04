import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "../store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";


const ProductsCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const navigation = useNavigation();
  return (
    <Pressable style={styles.card} onPress={() => navigation.navigate("ProductItem", {product})}>
      <Image
        resizeMode="contain"
        source={{ uri: product.image }}
        style={styles.image}
      />
      <Text style={styles.name}>
        {product.title.length > 15
          ? product.title.substring(0, 15) + "..."
          : product.title}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{product.price}</Text>
        <Text style={styles.reviews}>{product.rating.rate} ratings</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=>addToCart(product)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

const Products = ({ products }) => {
  return (
    <View style={[styles.container, {marginBottom: useBottomTabBarHeight()}]}>
      <Text style={styles.title}>Products</Text>
      {products.length === 0 && (
        <ActivityIndicator size="large" color={COLORS.black} />
      )}
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <ProductsCard product={item} index={index} />
        )}
        keyExtractor={(product, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{ gap: 15 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: hp("2%"),
    fontWeight: "bold",
    marginBottom: 10,
  },
  name: {
    fontSize: hp("1.7%"),
    color: COLORS.lightBlack,
  },
  image: {
    width: "100%",
    height: wp("60%"),
  },
  card: {
    width: "49%",
    marginRight: 8,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: COLORS.white,
    padding: 10,
    marginBottom: hp(1)
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  price: {
    fontSize: hp("1.8%"),
    fontWeight: "bold",
    color: COLORS.black,
  },
  reviews: {
    fontSize: hp("1.8%"),
    fontWeight: "bold",
    color: COLORS.yellow,
  },
  button: {
    backgroundColor: COLORS.orange,
    padding: 10,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: hp("1.8%"),
    fontWeight: "bold",
    textAlign: "center",
  },
});
