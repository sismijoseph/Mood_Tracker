import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Dates from './Components/Date';
import Activity from './Components/Activity';
import Profile from '../../Components/Profile';
import BottomTabs from '../../Components/bottomTab';

const MoodTracker1 = ({ navigation, route }) => {

    return (
        <>
        <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
            <View style={styles.Container}>
                <Profile />
                <Dates Date1={route?.params?.Date1} />
                <Activity navigation={navigation} />
            </View>
        </ScrollView>
        <BottomTabs navigation={navigation}/>
        </>
    )
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20
    }
})
export default MoodTracker1;