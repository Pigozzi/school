import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import StudentDetails from './pages/StudentDetails';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="studentDetails" component={StudentDetails} />
            </Navigator>
        </NavigationContainer>
    )   
}