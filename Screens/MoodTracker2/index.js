import React ,{useState}from 'react';
import { View, StyleSheet } from 'react-native';

import Profile from '../../Components/Profile';
import DateCard from './Components/DateCard';
import Calendars from './Components/Calender';

const MoodTracker2 = ({route,navigation}) => {
    const [selected, setSelected] = useState('');
   
    return (
        <View style={styles.Container}>
            <Profile />
            <DateCard notes={route?.params?.Notes} navigation={navigation} selected={selected} setSelected={setSelected} />
            <Calendars selected={selected} setSelected={setSelected}/>
        </View>
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