import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { FONTS } from '../../../Constants/Constants';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const Card2 = ({navigation}) => {

    return (
        <View>
            <TouchableOpacity style={styles.CardView} onPress={()=>navigation.navigate('MoodTracker2')}>

                <View style={styles.CardView2} >
                    <Text style={[styles.DateText, { left: -37 }]}>Betty’s Goals</Text>
                    <Text style={styles.SubText}>5/7 Goals Met</Text>
                </View>

            </TouchableOpacity>

            <View style={styles.BoxView}>
                <View style={{ flexDirection: 'row', margin: 15 }}>
                    <View style={{ flexDirection: 'column', top: 10 }}>
                        <Image source={require('../assets/px.jpg')} />
                    </View>
                    <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={[styles.TextDesc, { color: '#344054', paddingRight: 5 }]}>Pharmacy</Text>
                            <Image source={require('../assets/G3.jpg')} />
                        </View>

                        <Text style={[styles.DateText, { color: '#667085' }]}>120 W Slaughter L, Austin, TX 78744</Text>
                    </View>

                    <View style={{ flex: 1, }}>
                        <Image source={require('../assets/more.jpg')} />

                    </View>

                </View>


                <View style={styles.vIEW1}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/call.jpg')} />
                        <Text style={styles.TextCall}>Call</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../assets/map.jpg')} />
                        <Text style={[styles.TextCall, { color: '#1C42FF' }]}>Directions</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    DateText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: FONTS.FontRegular

    },
    SubText: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: FONTS.FontSemiB,
    },
    CardView: {
        backgroundColor: '#151F6D',
        width: Width * 0.88,
        borderRadius: 12,
        paddingTop: Width * 0.04,
        paddingLeft: Width * 0.04,
        justifyContent: 'center',
        marginTop: 12
    },
    TextDesc: {
        color: '#101828',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
    },
    CardView2: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        width: Width * 0.80,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: Width * 0.04

    },
    BoxView: {
        backgroundColor: '#FFFFFF',
        width: Width * 0.88,
        elevation: 5,
        borderRadius: 8,
        marginTop: 15,
        marginLeft:2,
        

    },
    TextCall: {
        fontSize: 14,
        fontFamily: FONTS.FontRegular,
        color: '#191919',
        textDecorationLine: 'underline',
        marginLeft: 10,
        marginRight: 15
    },
    vIEW1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: Width * 0.2,
        marginBottom: Width * 0.05
    }

})
export default Card2;