import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { FONTS } from '../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Profile = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>

                <Image source={require('../assets/betty.jpg')} style={{ borderRadius: 25 }} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1 }}>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.NameText}>Betty Smith</Text>
                        <Text style={styles.EmailText}>bettysmith@gmail.com</Text>
                    </View>

                    <View>
                        <Image source={require('../assets/health.jpg')} style={{ borderRadius: 25 }} />
                    </View>

                </View>

            </View>
            <View style={styles.border} />

        </View>
    )
};

const styles = StyleSheet.create({
    NameText: {
        color: '#101828',
        fontSize: 14,
        fontWeight: '500',
        fontFamily: FONTS.FontMedium,
    },
    EmailText: {
        color: '#667085',
        fontSize: 14,
        fontWeight: '400',
        fontFamily: FONTS.FontRegular,
    },
    border: {
        borderWidth: 0.5,
        borderColor: '#EAECF0',
        width: Width * 0.90,
        alignItems: 'center',
        marginTop: 15
    }
})
export default Profile;