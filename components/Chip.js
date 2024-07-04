import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from '../theme';
const ChipComponent = ({mode, onPress, name}) => {
  return (
    <TouchableOpacity style={styles.chip} mode={mode}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ChipComponent

const styles = StyleSheet.create({
    chip: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 50,
        width: wp('44%'),
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        backgroundColor: 'lightgray'
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        width: '100%',
    }
})