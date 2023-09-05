import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const Card4 = () => {

    return (
        <View>
            <View style={{ paddingTop: 20, marginLeft: 15 }}>
                <Text style={styles.DateText}>From the Community</Text>
            </View>

            <View style={styles.CardView}>
                <Text style={styles.TextDesc}>SandwYch has your back on how to file & track your
                    legal documents. Make sure you set up</Text>
                <Text style={styles.TextDesc}>these with a loved one soon.<Text style={[styles.TextDesc, { color: '#931E42' }]}>Read more...</Text></Text>

                <View style={{ marginTop: Width * 0.04 }}>
                    <Image source={require('../assets/image1.jpg')} style={{ width: Width * 0.82 }} />
                </View>

                <View style={{ paddingTop: Width * 0.05, paddingBottom: Width * 0.05 }}>
                    <Text style={[styles.DateText, { fontWeight: '500', color: '#667085' }]}>Dismiss</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DateText: {
        color: '#344054',
        fontSize: 14,
        fontFamily: FONTS.FontBold
    },
    SubText: {
        fontSize: 14,
        color: '#667085',
        fontFamily: FONTS.FontRegular,
    },
    CardView: {
        backgroundColor: '#F9FAFB',
        width: Width * 0.90,
        borderRadius: 6,
        paddingTop: Width * 0.04,
        paddingLeft: Width * 0.04,
        justifyContent: 'center',
        marginTop: Width * 0.04
    },
    TextDesc: {
        color: '#101828',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
    },

})
export default Card4;