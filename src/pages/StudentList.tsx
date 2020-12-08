import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Row, Table } from 'react-native-table-component';

export default function StudentList() {
    // const [date, setDate] = useState(new Date(1598051730000));
    // const [mode, setMode] = useState('date');
    // const [show, setShow] = useState(false);

    const tableHead = ['Name', 'Student ID', 'Status'];

    // const onChange = (event: any, selectedDate: any) => {
    //     const currentDate = selectedDate || date;
    //     setShow(Platform.OS === 'ios');
    //     setDate(currentDate);
    // };

    // const showMode = (currentMode: any) => {
    //     setShow(true);
    //     setMode(currentMode);
    // };

    // const showDatepicker = () => {
    //     showMode('date');
    // };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Student Interaction Data</Text>

            {/* <View style={styles.selectDate}>
                <Button onPress={showDatepicker} title="Click to Select a Date" />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={() => { }}
                    />
                )}
            </View> */}

            <Text style={styles.titleTwo}>Student Interactions</Text>

            <ScrollView>
                <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
                    <Row data={tableHead} style={styles.header} textStyle={styles.headerText} />
                </Table>
                <ScrollView>
                    <Table>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                        <View style={styles.listWrapper}>
                            <Text style={styles.row}>Ada Lovelace</Text>
                            <Text style={styles.row}>15785892</Text>
                            <Text style={styles.row}>C</Text>
                        </View>
                    </Table>
                </ScrollView>
            </ScrollView>
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
        color: '#3C91E6',
    },
    // selectDate: {
    //     paddingTop: 20,
    //     paddingBottom: 20,
    // },
    titleTwo: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    header: {
        height: 50,
        backgroundColor: '#D8315B',
    },
    headerText: {
        color: '#FFF',
        textAlign: 'center'
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
    }
})