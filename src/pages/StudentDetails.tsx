import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import api from '../services/api';

export default function StudentDetails() {
    const [student_id, setStudentId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');

    const navigation = useNavigation();

    async function handleCreateStudent() {

        const data = {
            student_id,
            firstName,
            phone
        }

        await api.post('students', data);

        navigation.navigate('studentForm');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.change}>
                <RectButton style={styles.buttonChange} onPress={() => { }}>
                    <Text style={styles.buttonInputText}>STUDENT</Text>
                </RectButton>
                <RectButton style={styles.buttonChange} onPress={() => { }}>
                    <Text style={styles.buttonInputText}>TEACHER</Text>
                </RectButton>
            </View>

            <Text style={styles.label}>STUDENT ID #</Text>
            <TextInput
                style={styles.input}
                value={student_id}
                placeholder="Enter Your ID Number"
                onChangeText={setStudentId}
            />

            <Text style={styles.label}>FIRST NAME</Text>
            <TextInput
                style={styles.input}
                value={firstName}
                placeholder="Enter Your Name"
                onChangeText={setFirstName}
            />

            <Text style={styles.label}>PHONE NUMBER</Text>
            <TextInput
                style={styles.input}
                value={phone}
                placeholder="Enter Your Phone Number"
                onChangeText={setPhone}
            />

            <RectButton style={styles.buttonSubmit} onPress={handleCreateStudent}>
                <Text style={styles.buttonText}>Continue</Text>
            </RectButton>

            <Text style={styles.texts}>
                Have an Account? <Text style={styles.textRed}>Sign In</Text>
            </Text>
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
        fontWeight: "bold",
        color: '#000',
    },
    change: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonChange: {
        fontSize: 14,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        margin: 5,
        marginTop: 10,
        marginBottom: 40,
        backgroundColor: '#D8315B',
    },
    buttonInputText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: '600',
    },
    label: {
        color: '#D8315B',
        marginBottom: 8,
        fontWeight: "700",
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
        backgroundColor: '#D8315B',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
    },
    texts: {
        fontSize: 16,
        marginTop: 32,
        color: '#8D99AE',
        fontWeight: 'bold',
    },
    textRed: {
        color: '#D8315B',
        fontSize: 16,
        fontWeight: 'bold',
    }
})