import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { COLORS } from "../../theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { AirbnbRating, Rating } from "react-native-ratings";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import { useCartStore } from "../../store";

const ProductItemScreen = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const { params } = useRoute();

  const product = params.product || {};

  const [productItem, setProductItem] = useState(null);

  const [isLiked, setIsLiked] = useState(false);

  const addToCart = useCartStore((state) => state.addToCart);

  const productPresentCart = useCartStore((state) => state.productPresentCart);

  const cartLength = useCartStore((state) => state.cartLength());

  useEffect(() => {
    async function fetchProductById() {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${product.id}`
      );
      const data = response.data;
      setProductItem(data || null);
    }
    if (productPresentCart(product.id)) {
      setIsItemAdded(true);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    product.id ? fetchProductById() : setProductItem(product);
  }, []);
  return (
    <>
      {productItem === null ? (
        <SafeAreaView>
          <Header />
          <ActivityIndicator size="small" color={COLORS.black} />
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.container}>
          <Header showBackButton={true} />
          <ScrollView>
            <View style={{ padding: 10 }}>
              {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.black} />
              ) : (
                <ImageBackground
                  resizeMode="contain"
                  source={{ uri: productItem.image }}
                  style={styles.image}
                >
                  <View style={styles.imageContainer}>
                    <View style={styles.offer}>
                      <Text style={styles.offerText}>
                        {((10 / productItem.price) * 100).toFixed(0)}%
                      </Text>
                      <Text style={styles.offerText}>off</Text>
                    </View>
                    <View style={styles.share}>
                      <Ionicons name="share-social" size={24} color="black" />
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.heart}
                    onPress={() => setIsLiked(!isLiked)}
                  >
                    <MaterialCommunityIcons
                      name={isLiked ? "cards-heart" : "cards-heart-outline"}
                      size={25}
                      color={isLiked ? COLORS.red : COLORS.black}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              )}
              <View style={styles.rating}>
                <Text style={styles.category}>{productItem.category}</Text>
                <AirbnbRating
                  count={5}
                  defaultRating={productItem.rating.rate}
                  size={15}
                  isDisabled={true}
                  showRating={false}
                  ratingContainerStyle={
                    {
                      // backgroundColor: COLORS.primary,
                    }
                  }
                  starContainerStyle={{
                    // backgroundColor: COLORS.primary,
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                />
              </View>
              <Text style={styles.description}>{productItem.description}</Text>
              <View>
                <Text style={styles.price}>₹{productItem.price}</Text>
              </View>
            </View>

            <Divider bold={true} style={{ marginVertical: 10 }} />

            <View style={styles.discountContainer}>
              <MaterialCommunityIcons
                name="brightness-percent"
                size={24}
                color={COLORS.orange}
              />
              <Text style={styles.discountText}>All offers & discounts</Text>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </View>

            <Divider bold={true} style={{ marginVertical: 10 }} />

            <View style={styles.couponContainer}>
              <MaterialIcons name="discount" size={24} color={COLORS.orange} />
              <View>
                <Text style={styles.discountText}>Coupon Discount</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.save}>Save 5% now.</Text>
                  <Text style={styles.details}>Details</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.apply}>
                <Text style={styles.discount}>Apply</Text>
              </TouchableOpacity>
            </View>

            <Divider bold={true} style={{ marginVertical: 10 }} />

            <View style={styles.totalContainer}>
              <Text style={styles.total}>Total: </Text>
              <Text style={styles.totalPrice}>₹{productItem.price}</Text>
            </View>

            <View style={styles.deliveryContainer}>
              <Text style={styles.deliveryText}>
                FREE delivery Thursday, 14th May. Order within 1hr 41 mins.
              </Text>
              <View style={styles.locationContainer}>
                <Ionicons name="location-outline" size={22} color="black" />
                <Text style={styles.locationText}>
                  Deliver to Saikumar - Banaglore 560032
                </Text>
              </View>
            </View>

            <Text style={styles.inStock}>In Stock</Text>

            <View style={styles.buttonContainer}>
              {isItemAdded ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cart")}
                  style={[styles.button, { backgroundColor: COLORS.yellow }]}
                >
                  <Text style={styles.buttonText}>Added to Cart</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    addToCart(productItem);
                    setIsItemAdded(true);
                  }}
                  style={[styles.button, { backgroundColor: COLORS.yellow }]}
                >
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={[styles.button, { backgroundColor: COLORS.orange }]}
              >
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

export default ProductItemScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: wp("95%"),
    height: hp("40%"),
    backgroundColor: COLORS.white,
    padding: 10,
    marginVertical: 15,
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  category: {
    fontSize: hp("1.7%"),
    color: COLORS.primary,
    textTransform: "capitalize",
  },
  description: {
    fontSize: hp("1.7%"),
    marginTop: 10,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  offer: {
    backgroundColor: COLORS.red,
    borderRadius: 5,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  offerText: {
    color: COLORS.white,
    fontSize: hp("1.5%"),
    fontWeight: "bold",
  },
  share: {
    backgroundColor: "lightgray",
    padding: 4,
    borderRadius: 50,
  },
  heart: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "lightgray",
    padding: 4,
    borderRadius: 50,
  },
  price: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    marginTop: 10,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  couponContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  discountText: {
    fontSize: hp("2%"),
    fontWeight: "400",
  },
  save: {
    fontSize: hp("1.7%"),
    fontWeight: "400",
    backgroundColor: "lightgreen",
    marginRight: 10,
    marginTop: 5,
    padding: 5,
  },
  details: {
    color: COLORS.primary,
    backgroundColor: "transparent",
    fontSize: hp("1.7%"),
  },
  apply: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    borderRadius: 5,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  total: {
    fontSize: hp("2.4%"),
    fontWeight: "600",
  },
  totalPrice: {
    fontSize: hp("2.8%"),
    fontWeight: "600",
  },
  deliveryContainer: {
    padding: 10,
  },
  deliveryText: {
    fontSize: hp("1.7%"),
    fontWeight: "400",
    color: COLORS.primary,
  },
  locationText: {
    fontSize: hp("1.7%"),
    fontWeight: "400",
  },
  locationContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inStock: {
    paddingHorizontal: 10,
    fontSize: hp("1.8%"),
    fontWeight: "400",
    color: COLORS.green,
  },
  buttonContainer: {
    gap: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: hp("2%"),
    textAlign: "center",
  },
});
