import React, { } from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { FONTS } from '../Constants/Constants';
const { width } = Dimensions.get('screen');


const BottomTabs = ({ navigation, }) => {
   
    return (
        <View style={[styles.botttomContainer, {}]}>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Image source={require('./assets/users.jpg')} />
                <Text style={styles.titleText}>CareTeam</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => navigation.navigate('Dashboard')}
            >
                <Image source={require('./assets/add.jpg')} />
                <Text style={styles.titleText}>Tasks</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center', top: 2 }}>
                <Image source={require('./assets/home.jpg')} />
                <Text style={[styles.titleText, { top: 7 }]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}
            >
                <Image source={require('./assets/tab.jpg')} />
                <Text style={[styles.titleText, { top: 7 }]}>Meds</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignItems: 'center' }}>
                <Image source={require('./assets/chat.jpg')}></Image>
                <Text style={[styles.titleText, { top: 10 }]}>Chat</Text>
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
        paddingTop: 10,
        flexDirection: 'row',
        height: width * 0.17,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        width: width,
        padding: 15,
        elevation: 5
    }
})
export default BottomTabs;
