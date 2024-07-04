import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DealsData, TodaysDealsData } from '../data'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import { COLORS } from '../theme';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>Today's Deals</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SeeAllDeals')}>
                <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
        </View>
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
     header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: hp("1%")
     },
     cardContainer: {
      backgroundColor: "white"
     },
     title: {
        fontSize: hp("2%"),
        fontWeight: 'bold',
        marginBottom: 10
     },
     viewAll: {
        color: COLORS.primary,
        fontSize: hp("1.6%"),
        fontWeight: 'bold',
        textAlign: 'center'
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