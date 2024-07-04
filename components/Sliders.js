import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderImages } from "../data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Sliders = () => {
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SliderImages}
        renderItem={({ item, index }) => (
          <Image source={ item } key={index} style={styles.image} />
        )}
      />
    </View>
  );
};

export default Sliders;

const styles = StyleSheet.create({
  image: {
    width: wp("100%"),
    height: hp("25%"),
  },
});
