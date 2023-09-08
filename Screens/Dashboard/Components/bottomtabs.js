import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS } from '../../../Constants/Constants';
const { width } = Dimensions.get('screen');


const BottomTabs = ({ navigation, }) => {

    return (
        <View style={[styles.botttomContainer,{}]}>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Image source={require('../../../Components/assets/users.jpg')} />
                <Text style={styles.titleText}>CareTeam</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Image source={require('../../../Components/assets/add.jpg')} />
                <Text style={styles.titleText}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center', top: 2 }}>
                <Image source={require('../../../Components/assets/home.jpg')} />
                <Text style={[styles.titleText,{top:7}]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
            >
                <Image source={require('../../../Components/assets/tab.jpg')} />
                <Text style={[styles.titleText,{top:7}]}>Meds</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center',top:2 }}>
                <Image source={require('../../../Components/assets/chat.jpg')}></Image>
                <Text style={[styles.titleText,{top:7}]}>Chat</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#3C3C4399',
        fontSize: 12,
        fontFamily: FONTS.FontRegular,
        fontWeight: '500',
        textAlign: 'center',
        top: 5
    },
    botttomContainer: {
        //flex: 0.1,
        paddingTop: 5,
        flexDirection: 'row',
        height: width *0.1,
        justifyContent: 'space-between',
        backgroundColor:'#FFFFFF',
        width: width*0.88,
        elevation:0.01
    }
})
export default BottomTabs;
