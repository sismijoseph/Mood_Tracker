import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FONTS } from '../../../Constants/Constants';

const Calenders = (props) => {
    const [CurrentDay, setCurrentDay] = useState(new Date())

    return (

        <View style={styles.CardView}>
            <Calendar
                onDayPress={day => {
                    props.setSelected(day.dateString);
                }}
                renderArrow={(direction) => {
                    return direction === 'left' ? (
                        <Image source={require('../assets/icon1.jpg')} />
                    ) : (
                        <Image source={require('../assets/Icon.jpg')} />
                    );
                }}
              
                theme={{

                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#667085',
                    dayTextColor: '#2d4150',
                    todayDotColor: 'red',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#2d4150',
                    selectedDotColor: '#2d4150',
                    arrowColor: '#344054',
                    disabledArrowColor: '#d9e1e8',
                    selectedDayTextColor: '#2d4150',
                    selectedDayBackgroundColor: '#ffffff',
                    monthTextColor: '#344054',
                    indicatorColor: '#344054',
                    textDayFontFamily: FONTS.FontMedium,
                    textMonthFontFamily: FONTS.FontMedium,
                    textDayHeaderFontFamily: FONTS.FontMedium,
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 14,
                    textMonthFontSize: 14,
                    textDayHeaderFontSize: 14,
                    'stylesheet.calendar.header': {
                        dayTextAtIndex0: {
                            color: '#344054'
                        },
                        dayTextAtIndex1: {
                            color: '#344054'
                        },
                        dayTextAtIndex2: {
                            color: '#344054'
                        },
                        dayTextAtIndex3: {
                            color: '#344054'
                        },
                        dayTextAtIndex4: {
                            color: '#344054'
                        },
                        dayTextAtIndex5: {
                            color: '#344054'
                        },
                        dayTextAtIndex6: {
                            color: '#344054'
                        }
                    }
                }}

                firstDay={1}

                markedDates={{
                    [props?.selected]:{selected: true, marked: true,selectedDotColor:'#151F6D',selectedColor:'#F2F4F7'}
                }}
            

            />
        </View>
    );
};

const styles = StyleSheet.create({
    CardView: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F2F4F7',
        padding: 10,
        marginTop: 15
    }
})
export default Calenders;