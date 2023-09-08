import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';
import { FONTS } from '../../../Constants/Constants';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const NoteModal = (props) => {


    const ModalClose = () => {
        props.setIsModalVisible(false)
        props?.navigation.navigate('MoodTracker2', { Notes: props?.Notes })
    }

    return (

        <Modal
            transparent={true}
            visible={props.isModalVisible}
            onRequestClose={ModalClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.HeadText}>Add Note for Today’s Mood</Text>

                    <View style={styles.CardView}>
                        <TextInput
                            value={props?.Notes}
                            style={styles.BoxContent}
                            multiline
                            onChangeText={(text) => props?.setNotes(text)} />

                    </View>

                    <TouchableOpacity style={styles.TouchBtn} onPress={() => ModalClose()}>
                        <Text style={styles.btnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 2
    },
    modalContent: {
        backgroundColor: 'white',
        padding: Width * 0.04,
        borderRadius: 10,

    },
    HeadText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#101828',
        fontFamily: FONTS.FontMedium,
        top: 2
    },
    CardView: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F2F4F7',
        padding: 10,
        marginTop: 10,
        width: Width * 0.80,
        height: Width * 0.4
    },
    BoxContent: {
        fontSize: 14,
        color: '#434343',
        fontFamily: FONTS.FontRegular

    },
    TouchBtn: {
        borderColor: '#151F6D',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Width * 0.06,
        height: Width * 0.12,
        backgroundColor: '#151F6D',
        marginBottom: Width * 0.02

    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: FONTS.FontMedium
    }
});

export default NoteModal;
