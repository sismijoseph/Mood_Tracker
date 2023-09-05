import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    FlatList
} from 'react-native';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const CARD = [
    {
        id: 1,
        title: 'SUN',
        image: require('../assets/G1.jpg')
    },
    {
        id: 2,
        title: 'MON',
        image: require('../assets/G2.jpg')
    },
    {
        id: 3,
        title: 'TUE',
        image: require('../assets/G2.jpg')
    },
    {
        id: 4,
        title: 'WED',
        image: require('../assets/G2.jpg')
    },
    {
        id: 5,
        title: 'THU',
        image: require('../assets/G2.jpg')
    },
    {
        id: 6,
        title: 'FRI',
        image: require('../assets/G2.jpg')
    },
    {
        id: 7,
        title: 'SAT',
        image: require('../assets/G2.jpg')
    },
]
const Card1 = () => {


    return (
        <View>
            <View style={{ paddingTop: 20, marginLeft: 15 }}>
                <Text style={styles.DateText}>Today’s Overview</Text>
                <Text style={styles.SubText}>You have devoted <Text style={[styles.SubText, { fontWeight: '700' }]}>4 hours </Text>of care today.</Text>
            </View>

            <View style={styles.CardView}>
                <View style={styles.CardView2}>
                    <Text style={[styles.SubText, { color: '#434343' }]}>Betty’s Mood this Week</Text>

                    <View style={{ alignItems: 'center', margin: 5 }}>
                        <FlatList
                            data={CARD}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.PICCard}>
                                    <Text style={styles.DayText} >{item.title}</Text>
                                    <View style={{ paddingBottom: 5 }}>
                                        <Image source={item.image} style={{ width: 20, height: 20 }} />
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    DateText: {
        color: '#344054',
        fontSize: 14,
        fontFamily: FONTS.FontBold
    },
    SubText: {
        fontSize: 14,
        color: '#667085',
        fontFamily: FONTS.FontRegular
    },
    CardView: {
        backgroundColor: '#F7E6D4',
        width: Width * 0.88,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    DayText: {
        color: '#434343',
        fontSize: 11,
        fontFamily: FONTS.FontSemiB,
        paddingTop: 5
    },
    CardView2: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: Width * 0.80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
        margin: Width * 0.04

    },
    PICCard: {
        width: Width * 0.09,
        height: Width * 0.13,
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        margin: 2,
        alignItems: 'center',

    }
})
export default Card1;