import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export default function StudentForm() {
    return (
        <View style={styles.container}>
            <Text>Good Morning, John</Text>
            <Text>December 4, 2020</Text>


            <Text>Please Click Below to Submit Your Attendance for Today!</Text>

            <RectButton onPress={() => { }}>
                <Text>Yes, I am engaged in learning today!!</Text>
            </RectButton>

            <Text>Need Help?</Text>


            <RectButton onPress={() => { }}>
                <Text>Submit</Text>
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
})