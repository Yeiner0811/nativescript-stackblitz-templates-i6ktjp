import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type PrinterScreenProps = {
    route: RouteProp<MainStackParamList, 'Printer'>;
    navigation: FrameNavigationProp<MainStackParamList, 'Printer'>;
};

export function PrinterScreen({ navigation, route }: PrinterScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>Printer Errors</label>
            
            <button style={styles.button} onTap={() => navigation.goBack()}>
                Go back
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#eceff4',
    },
    text: {
        textAlignment: 'center',
        fontSize: 24,
        color: 'black',
    },
    button: {
        fontSize: 24,
        color: '#2e6ddf',
    },
});