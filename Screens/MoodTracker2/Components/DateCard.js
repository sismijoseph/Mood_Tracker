import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const DateCard = (props) => {


    return (
        <View>
            <View style={{ paddingTop: 20, alignItems: 'center', }}>
                <Text style={styles.DateText}>Mood Tracker</Text>
            </View>

            <View style={styles.CardView1}>
                <Text style={styles.DtText}>July 24, 2023</Text>

                {!props.notes ?
                    <TouchableOpacity style={styles.btnView}
                        onPress={() => props?.navigation.navigate('MoodTracker1', { Date1: props?.selected })}>

                        <Text style={styles.btnText}>How is Betty feeling today?</Text>
                    </TouchableOpacity> :
                    <View style={{ margin: 15 }}>
                        <Text style={styles.BoxContent}>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    </View>}

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    DateText: {
        color: '#101828',
        fontSize: 20,
        fontFamily: FONTS.FontBold
    },
    DtText: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
        color: '#101828',
        marginTop: 10,
        marginLeft: 10
    },
    btnText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#434343',
        fontFamily: FONTS.FontBold
    },
    CardView1: {
        width: Width * 0.88,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#DCDADA',

    },
    btnView: {
        backgroundColor: '#DCDADA',
        height: Width * 0.1,
        alignItems: 'center',
        width: Width * 0.78,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        left: 2,
        margin: 15
    },
    BoxContent: {
        fontSize: 14,
        fontWeight: '400',
        color: '#434343'
    },

})
export default DateCard;