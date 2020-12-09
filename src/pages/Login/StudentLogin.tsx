import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import api from '../../services/api';
import global from '../../styles/global';

export default function StudentLogin() {
    const [student_id, setStudentId] = useState('');

    const navigation = useNavigation();

    return (
        <View style={global.container}>
            <Text style={global.title}>Sign In</Text>

            <View style={global.change}>
                <RectButton style={global.buttonSelected} onPress={() => navigation.navigate('studentLogin')}>
                    <Text style={global.buttonInputText}>STUDENT</Text>
                </RectButton>
                <RectButton style={global.buttonChange} onPress={() => navigation.navigate('teacherLogin')}>
                    <Text style={global.buttonInputText}>TEACHER</Text>
                </RectButton>
            </View>

            <Text style={global.label}>STUDENT ID #</Text>
            <TextInput
                style={global.input}
                value={student_id}
                placeholder="Enter Your ID Number"
                onChangeText={setStudentId}
            />

            <RectButton style={global.buttonSubmit} onPress={() => navigation.navigate('studentForm')}>
                <Text style={global.buttonTextSubmit}>Continue</Text>
            </RectButton>

            <View style={global.viewSignIn}>
                <Text style={global.textSignIn}>
                    No have Account?
                </Text>
                <RectButton onPress={() => navigation.navigate('studentCreate')}>
                    <Text style={global.textRed}> Sign Up</Text>
                </RectButton>
            </View>
        </View>
    )
}