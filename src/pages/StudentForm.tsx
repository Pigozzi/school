import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function StudentForm() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Good Morning, John</Text>
            <View style={styles.directionRight}>
                <Text style={styles.titleDate}>December 4, 2020</Text>
            </View>

            <Text style={styles.titleThree}>Please Click Below to Submit Your Attendance for Today!</Text>

            <RectButton style={styles.buttonLearning} onPress={() => { }}>
                <Text style={styles.buttonText}>Yes, I am engaged in learning today!!</Text>
            </RectButton>

            <Text style={styles.titleFour}>Need Help?</Text>

            <TextInput
                style={[styles.input, { height: 110 }]}
                multiline
                placeholder="Please tell me howl can help you!"
            />

            <RectButton style={styles.buttonSubmit} onPress={() => { }}>
                <Text style={styles.buttonText}>Submit</Text>
            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F9F4FC',
        borderBottomWidth: 1,
        borderColor: '#DDE3F0',
        paddingTop: 50,
    },
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
    titleThree: {
        fontSize: 24,
        paddingBottom: 30,
    },
    buttonLearning: {
        backgroundColor: '#82AEB1',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
    },
    titleFour: {
        fontSize: 24,
        color: '#D8315B',
        paddingTop: 30,
        paddingBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1.4,
        borderColor: '#d3e2e6',
        borderRadius: 20,
        height: 56,
        paddingVertical: 18,
        paddingHorizontal: 24,
        marginBottom: 16,
        textAlignVertical: 'top',
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