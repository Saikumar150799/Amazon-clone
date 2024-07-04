import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DealsData } from '../data'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useNavigation } from '@react-navigation/native';

const DealsCard = ({item, index}) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.card} onPress={() => navigation.navigate('ProductItem', {product: item})}>
            <Image resizeMode='contain' source={{uri: item.image}} key={index} style={styles.image} />
        </Pressable>
    )
}

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Deals of the week</Text>
      <FlatList 
        data={DealsData}
        renderItem={({item, index}) => <DealsCard item={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={{gap: 10}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Deals

const styles = StyleSheet.create({
    container: {
       padding: 10,
    },
    title: {
        fontSize: hp("2%"),
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    card: {
      width: "49%",
      height: wp('50%'),
      backgroundColor: 'white',
      marginRight: 8,
      borderRadius: 5,
      overflow: 'hidden',
      marginBottom: hp(1)
    }
})