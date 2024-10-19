import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type BNRScreenProps = {
  route: RouteProp<MainStackParamList, 'BNR'>;
  navigation: FrameNavigationProp<MainStackParamList, 'BNR'>;
};

export function BNRScreen({ navigation }: BNRScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <flexboxLayout style={styles.header}>
        <button
          style={styles.backButton}
          onTap={() => navigation.navigate('Main')}
        >
          ❮❮
        </button>
        <label style={styles.label}>BNR</label>
      </flexboxLayout>
      <flexboxLayout style={styles.buttonContainer}>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('TopModule')}
        >
          Top Module
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('CashBox')}
        >
          CashBox
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('Recycler')}
        >
          Recyler
        </button>
      </flexboxLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff4',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    //marginBottom: 20,
    padding: 20,
  },
  backButton: {
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    backgroundColor: '#7b838e',
    borderRadius: 4,
    padding: 0,
    marginRight: 10,
    width: 40,
    height: 40,
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    fontSize: 24,
    color: 'white',
    backgroundColor: '#7b838e',
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
