import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Profile from '../../Components/Profile';
import Card1 from './Components/Card1';
import Card4 from './Components/Card4';
import Card3 from './Components/Card3';
import Card2 from './Components/Card2';

const Dashboard = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Container}>

        <Profile />
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />

      </View>
    </ScrollView>
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