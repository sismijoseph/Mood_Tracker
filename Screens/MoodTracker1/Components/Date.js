import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import moment from 'moment';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const Dates = (props) => {
    const data = [
        {
            id: 1,
            image: require('../assets/Frame2.png'),
            path: require('../assets/g1.jpg')
        },
        {
            id: 2,
            image: require('../assets/Frame1.png'),
            path: require('../assets/g2.jpg')
        },
        {
            id: 3,
            image: require('../assets/Frame4.png'),
            path: require('../assets/g3.jpg')
        },
        {
            id: 4,
            image: require('../assets/Frame3.png'),
            path: require('../assets/g4.jpg')
        },
        {
            id: 5,
            image: require('../assets/Frame5.png'),
            path: require('../assets/g5.jpg')
        }

    ]

    const [selectedItem, setSelectedItem] = useState(null);

    const _choosen =(selectedItem)=>{
        
        setSelectedItem(selectedItem)
    }

    return (
        <View>
            <View style={{ paddingTop: 30, alignItems: 'center', }}>
                <Text style={styles.DateText}>{moment(props?.selected ? props.selected :new Date()).format('MMMM DD, YYYY')}</Text>
            </View>

            <View style={{ paddingTop: 20 }}>
                <Text style={[styles.DateText, { fontSize: 14, fontWeight: '500' }]}>Select mood:</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <FlatList
                    data={data}
                    numColumns={5}
                    keyExtractor={item => item.id}
                    renderItem={(item, index) => {
                        const isSelected1 = (selectedItem === item.item.id);
                        return (
                            <TouchableOpacity onPress={() => _choosen(item.item.id)}>
                                {!isSelected1 ? <Image source={item.item.image}
                                    style={{ width: Width * 0.18, height: Width * 0.15, }} /> :
                                    <Image source={item.item.path}
                                        style={{ width: Width * 0.12, height: Width * 0.12,top:5,marginLeft:6,marginRight:6 }} />}
                            </TouchableOpacity>
                        )
                    }} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    DateText: {
        color: '#101828',
        fontSize: 20,
        fontWeight: '700'
    }
})
export default Dates;