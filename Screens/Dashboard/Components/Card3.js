import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const Card3 = () => {

    return (
        <View>

            <View style={styles.border} />

            <View style={{ paddingTop: 20, marginLeft: 15 }}>
                <Text style={styles.DateText}>Caregiving Resources</Text>
            </View>

            <View style={styles.CardView}>

                <Text style={styles.DateText1}>The benefits of Caring for your Loved Ones</Text>
                <Text style={styles.TextDesc}>Caring for a loved one can be a positive experience. </Text>


                <View style={{ marginTop: Width * 0.04 }}>
                    <Image source={require('../assets/image2.jpg')} style={{ width: Width * 0.80 }} />
                </View>

                <View style={{ paddingTop: Width * 0.05, paddingBottom: Width * 0.05 }}>
                    <Text style={[styles.DateText, { fontWeight: '500', color: '#667085' }]}>Dismiss</Text>

                </View>

            </View>

            <View style={styles.border} />
        </View>
    )
}

const styles = StyleSheet.create({
    DateText: {
        color: '#344054',
        fontSize: 14,
        fontFamily: FONTS.FontBold,
    },
    DateText1: {
        color: '#101828',
        fontSize: 14,
        fontFamily: FONTS.FontSemiB,
    },
    SubText: {
        fontSize: 14,
        color: '#667085',
        fontFamily: FONTS.FontRegular,
    },
    CardView: {
        backgroundColor: '#F9FAFB',
        width: Width * 0.88,
        borderRadius: 6,
        paddingTop: Width * 0.04,
        paddingLeft: Width * 0.04,
        justifyContent: 'center',
        marginTop: Width * 0.04
    },
    TextDesc: {
        color: '#667085',
        fontSize: 14,
        fontFamily: FONTS.FontRegular,
    },
    border: {
        borderWidth: 0.5,
        borderColor: '#EAECF0',
        width: Width * 0.90,
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'center',

    }

})
export default Card3;