import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { categories } from "../data";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {
  FadeInRight,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const CategoryCard = ({ category, index }) => {
  return (
    <Animated.View entering={FadeInRight.delay(index * 100)}>
      <TouchableOpacity style={styles.container}>
        <Image
          resizeMode="cover"
          source={category.image}
          style={styles.image}
        />
        <Text style={styles.text}>{category.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Categories = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, gap: 10 }}
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryCard category={item} index={index} />
        )}
        keyExtractor={(category, index) => index.toString()}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    backgroundColor: "white",
    width: wp(15),
    height: wp(15),
    aspectRatio: 1,

    borderRadius: 50,
  },
  text: {
    fontSize: hp(1.5),
    fontWeight: "600",
  },
});
