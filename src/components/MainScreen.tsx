import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { MainStackParamList } from '../NavigationParamList';

type MainScreenProps = {
  route: RouteProp<MainStackParamList, 'Main'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Main'>;
};

export function MainScreen({ navigation }: MainScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center">NCR ERRORS</label>
      <flexboxLayout style={styles.buttonContainer}>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('BCR', { message: 'Hello, world!' })}
        >
          BNR Errors
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('BNR', { message: 'Hello, world!' })}
        >
          BCR Errors
        </button>
      </flexboxLayout>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Cambiar a 'row' para alinear los botones en fila
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    fontSize: 24,
    color: 'white', // Color Letras
    backgroundColor: '#2e6ddf', // Color fondo
    width: 150, // Añadir ancho
    height: 150, // Añadir alto
    margin: 10, // Añadir margen para espaciar los botones
    borderRadius: 5,
  },
});
