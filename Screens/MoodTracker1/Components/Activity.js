import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';

import NoteModal from './Modal';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const data = [
    {
        "id": 1,
        "title": "Read",
        "image": require("../assets/el_book.jpg")
    },
    {
        "id": 2,
        "title": "Watch TV",
        "image": require("../assets/tv.jpg")
    },
    {
        "id": 3,
        "title": "Clean",
        "image": require("../assets/clean.jpg")
    },
    {
        "id": 4,
        "title": "Music",
        "image": require("../assets/music.jpg")
    },
    {
        "id": 5,
        "title": "Work",
        "image": require("../assets/work.jpg")
    },
    {
        "id": 6,
        "title": "Shop",
        "image": require("../assets/cart.jpg")
    },
    {
        "id": 7,
        "title": "Appointment",
        "image": require("../assets/app.jpg")
    },
    {
        "id": 8,
        "title": "Drive",
        "image": require("../assets/Vector.jpg")
    },
    {
        "id": 9,
        "title": "Paperwork",
        "image": require("../assets/pp.jpg")
    },
    {
        "id": 10,
        "title": "Pharmacy",
        "image": require("../assets/heal.jpg")
    },
    {
        "id": 11,
        "title": "Meditate",
        "image": require("../assets/yoga.jpg")
    },
    {
        "id": 12,
        "title": "Exercise",
        "image": require("../assets/Group.jpg")
    },
    {
        "id": 13,
        "title": "Ate Healthy",
        "image": require("../assets/ate.jpg")
    },
    {
        "id": 14,
        "title": "Good Sleep",
        "image": require("../assets/sleep.jpg")
    },
    {
        "id": 15,
        "title": "Relax",
        "image": require("../assets/msg.jpg")
    },
    {
        "id": 16,
        "title": "Family",
        "image": require("../assets/fam.jpg")
    }

]

const Activity = ({ navigation }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [Notes, setNotes] = useState('')

    const toggleItemSelection = (item) => {
        if (selectedItems.includes(item.item.id)) {
            setSelectedItems(selectedItems.filter((id) => id !== item.item.id));
        } else {
            setSelectedItems([...selectedItems, item.item.id]);
        }

    };

    return (
        <View>


            <View style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Text style={[styles.DateText, { fontSize: 13, fontWeight: '500' }]}>What has Betty done today? Select all that apply:</Text>
            </View>

            <View >
                <FlatList
                    data={data}
                    numColumns={4}
                    keyExtractor={item => item.id}
                    renderItem={(item, index) => {

                        return (
                            <TouchableOpacity onPress={() => {
                                toggleItemSelection(item)
                            }}
                                style={[styles.seelctView, {

                                    backgroundColor: selectedItems.includes(item.item.id)
                                        ? '#151F6D' : '#FFFFFF',
                                    borderColor: selectedItems.includes(item.item.id)
                                        ? '#FFFFFF' : '#DCDADA'
                                }]}>
                                <Image source={item.item.image} />

                                <View style={styles.TextView}>
                                    <Text style={[styles.DateText, {
                                        color: selectedItems.includes(item.item.id)
                                            ? '#FFFFFF' : '#434343',
                                    }]}>{item?.item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }} />
            </View>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}
                style={[styles.TouchBtn,
                {
                    backgroundColor: selectedItems?.length > 0 ? '#151F6D' : '#FFFFFF',
                    borderColor: selectedItems?.length > 0 ? '#151F6D' : '#EAECF0'
                }]}>
                <Text style={[styles.btnText, { color: selectedItems?.length > 0 ? '#FFFFFF' : '#D0D5DD' }]}>Continue</Text>
            </TouchableOpacity>

            <NoteModal
                Notes={Notes}
                setNotes={setNotes}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                navigation={navigation} />
        </View>
    )
};

const styles = StyleSheet.create({
    DateText: {
        color: '#434343',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: FONTS.FontSemiB
    },
    TouchBtn: {
        borderColor: '#EAECF0',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        height: Width * 0.12

    },
    TextView: {
        width: Width * 0.90,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },
    seelctView: {
        justifyContent: 'space-around',
        borderRadius: 6,
        width: Width * 0.195,
        margin: 5,
        height: Width * 0.195,
        paddingLeft: 10,
        paddingRight: 10,
        padding: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    btnText: {
        color: '#D0D5DD',
        fontWeight: '500',
        fontSize: 14,
        fontFamily: FONTS.FontMedium
    }
})
export default Activity;