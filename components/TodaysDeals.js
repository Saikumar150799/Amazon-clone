import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DealsData, TodaysDealsData } from '../data'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { COLORS } from '../theme';
const DealCard = ({item}) => {
    return (
        <View style={styles.cardContainer}>
            <Image resizeMode='contain' source={{uri: item.image}} style={styles.image} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Upto {item.offer} off</Text>
            </TouchableOpacity>
        </View>
    )
}

const TodaysDeals = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Today's Deals</Text>
     <FlatList 
     data={TodaysDealsData}
     renderItem={DealCard}
     keyExtractor={(item) => item.id}
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{gap: 10}}
     />
    </View>
  )
}

export default TodaysDeals

const styles = StyleSheet.create({
    container: {
        padding: 10,
     },
     cardContainer: {
      backgroundColor: "white"
     },
     title: {
        fontSize: hp("2%"),
        fontWeight: 'bold',
        marginBottom: 10
     },
     image: {
        width: wp('40%'),
        height: hp('20%'),
     },
     button: {
        backgroundColor: COLORS.red,
        padding: 10,
        borderRadius: 5,
        marginTop: 10
     },
     buttonText: {
        color: 'white',
        fontSize: hp("1.6%"),
        fontWeight: 'bold',
        textAlign: 'center'
     }
})