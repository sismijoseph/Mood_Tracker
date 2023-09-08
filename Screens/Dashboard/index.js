import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Profile from '../../Components/Profile';
import Card1 from './Components/Card1';
import Card4 from './Components/Card4';
import Card3 from './Components/Card3';
import Card2 from './Components/Card2';
import BottomTabs from './Components/bottomtabs';
const Dashboard = ({navigation}) => {
  return (
 
      <View style={styles.Container}>
   <ScrollView showsVerticalScrollIndicator={false}>
        <Profile />
        <Card1 />
        <Card2 navigation={navigation}/>
        <Card3 />
        <Card4 />
        </ScrollView>
        <BottomTabs navigation={navigation}/>

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

export default Dashboard;