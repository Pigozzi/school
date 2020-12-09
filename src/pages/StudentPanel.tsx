import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import global from '../styles/global';

export default function StudentPanel() {
    return (
        <View style={global.container}>

            <Text style={styles.title}>HELLO, JOHN</Text>

            <View style={styles.directionCenter}>
                <Text style={styles.titleTwo}>MESSAGE HISTORY </Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.headerText}>DATE</Text>
                <Text style={styles.headerText}>STATUS</Text>
            </View>

            <ScrollView style={{ height: 350 }}>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 6, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 5, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
                <View style={styles.listWrapper}>
                    <Text style={styles.row}>December 4, 2020</Text>
                    <Text style={styles.row}>Completed</Text>
                </View>
            </ScrollView>

            <RectButton style={styles.buttonSubmit} onPress={() => { }}>
                <Text style={global.buttonTextSubmit}>EXIT</Text>
            </RectButton>
        </View>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3C91E6'
    },
    titleTwo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20,
        paddingTop: 20,
    },
    directionCenter: {
        alignItems: 'center',
    },
    header: {
        height: 50,
        backgroundColor: '#D8315B',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRightWidth: 1,
    },
    row: {
        flex: 1,
        fontSize: 13,
        textAlign: 'center',
        paddingHorizontal: 5,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
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
})