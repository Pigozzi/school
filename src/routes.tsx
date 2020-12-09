import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import StudentLogin from './pages/Login/StudentLogin';
import TeacherLogin from './pages/Login/TeacherLogin';

import StudentCreate from './pages/Create/StudentCreate';
import TeacherCreate from './pages/Create/TeacherCreate';

import StudentForm from './pages/StudentForm';
import StudentList from './pages/StudentList';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>

                {/* LOGIN */}
                <Screen
                    name="studentLogin"
                    component={StudentLogin}
                />
                <Screen
                    name="teacherLogin"
                    component={TeacherLogin}
                />

                {/* CREATE */}
                <Screen
                    name="studentCreate"
                    component={StudentCreate}
                />
                <Screen
                    name="teacherCreate"
                    component={TeacherCreate}
                />

                {/* OTHER ROUTES */}
                <Screen
                    name="studentForm"
                    component={StudentForm}
                />
                <Screen
                    name="studentList"
                    component={StudentList}
                />
            </Navigator>
        </NavigationContainer>
    )
}