import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import StudentDetails from './pages/StudentDetails';
import StudentForm from './pages/StudentForm';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="studentDetails" component={StudentDetails} />
                <Screen name="studentForm" component={StudentForm} />
            </Navigator>
        </NavigationContainer>
    )   
}