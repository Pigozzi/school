import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import global from '../styles/global';

export default function StudentForm() {
    return (
        <View style={global.container}>
            <Text style={styles.title}>Good Morning, John</Text>
            <View style={styles.directionRight}>
                <Text style={styles.titleDate}>December 4, 2020</Text>
            </View>

            <Text style={styles.titleTwo}>Please Click Below to Submit Your Attendance for Today!</Text>

            <RectButton style={styles.buttonLearning} onPress={() => { }}>
                <Text style={global.buttonTextSubmit}>Yes, I am engaged in learning today!!</Text>
            </RectButton>

            <Text style={styles.titleThree}>Need Help?</Text>

            <TextInput
                style={[global.input, { height: 110 }]}
                multiline
                placeholder="Please tell me how I can help you!"
            />

            <RectButton style={styles.buttonSubmit} onPress={() => { }}>
                <Text style={global.buttonTextSubmit}>Submit</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6'
    },
    directionRight: {
        alignItems: 'flex-end',
    },
    titleDate: {
        fontSize: 16,
        paddingBottom: 30,
    },
    titleTwo: {
        fontSize: 24,
        paddingBottom: 30,
    },
    titleThree: {
        fontSize: 24,
        color: '#D8315B',
        paddingTop: 30,
        paddingBottom: 20,
    },
    buttonLearning: {
        backgroundColor: '#82AEB1',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    buttonSubmit: {
        fontSize: 16,
        backgroundColor: '#3C91E6',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 10,
    },
})