import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import moment from 'moment';
import api from '../services/api';
import global from '../styles/global';

export default function StudentForm() {

    const presence = true;
    const [help, setHelp] = useState('');

    // const student_id = localStorage.getItem('student_id')
    // const name = localStorage.getItem('name');
    const date = moment().format('MMMM Do YYYY');

    const navigation = useNavigation();

    async function handleSubmitLearning() {

        try {
            // await api.post('messages', presence, {
            //     headers: {
            //         Authorization: student_id
            //     }
            // });
            navigation.navigate('studentMessage')

        } catch (err) {
            alert('Error to send message');
        }
    }

    async function handleSubmitHelp() {
        const data = {
            presence,
            help
        }

        try {
            // await api.post('messages', data, {
            //     headers: {
            //         Authorization: student_id
            //     }
            // });
            navigation.navigate('studentMessage');
        } catch (err) {
            alert('Error to send message');
        }
    }

    return (
        <View style={global.container}>
            <Text style={styles.title}>Good Morning, {name}</Text>
            <View style={styles.directionRight}>
                <Text style={styles.titleDate}>{date}</Text>
            </View>

            <Text style={styles.titleTwo}>Please Click Below to Submit Your Attendance for Today!</Text>

            <RectButton style={styles.buttonLearning} onPress={handleSubmitLearning}>
                <Text style={global.buttonTextSubmit}>Yes, I am engaged in learning today!!</Text>
            </RectButton>

            <Text style={styles.titleThree}>Need Help?</Text>

            <TextInput
                style={[global.input, { height: 110 }]}
                value={help}
                onChangeText={setHelp}
                multiline
                placeholder="Please tell me how I can help you!"
            />

            <RectButton style={styles.buttonSubmit} onPress={handleSubmitHelp}>
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