import React, { useState } from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';

import Profile from '../../Components/Profile';
import DateCard from './Components/DateCard';
import Calendars from './Components/Calender';
import BottomTabs from '../../Components/bottomTab';

const MoodTracker2 = ({ route, navigation }) => {
    const [selected, setSelected] = useState('');
    const [notes1, setNotes1] = useState(false)

    return (
        <>
        <ScrollView style={{backgroundColor:'#FFFFFF'}}>
        <View style={styles.Container}>
            <Profile />
            <DateCard
                notes1={notes1}
                notes={route?.params?.Notes}
                navigation={navigation}
                selected={selected}
                setSelected={setSelected}
                 />
            <Calendars
                selected={selected}
                setSelected={setSelected}
                notes1={notes1}
                setNotes1={setNotes1} />
        </View>
        
        </ScrollView>
        <BottomTabs navigation={navigation} height={0.15} elevation={5} width={0.90}/>
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
export default MoodTracker2;