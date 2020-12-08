import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import StudentDetails from './pages/StudentDetails';
import StudentForm from './pages/StudentForm';
import StudentList from './pages/StudentList';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="studentList" component={StudentList} />
                <Screen name="studentForm" component={StudentForm} />
                <Screen name="studentDetails" component={StudentDetails} />
            </Navigator>
        </NavigationContainer>
    )   
}