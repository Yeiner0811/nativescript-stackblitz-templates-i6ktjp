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
      <flexboxLayout style={styles.header}>
        <button
          style={styles.backButton}
          //onTap={() => navigation.navigate('Main')}
        >
          
        </button>
        <label style={styles.label}>Buscar Errores</label>
      </flexboxLayout>
      <flexboxLayout style={styles.buttonContainer}>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('BNR')}
        >
          BNR
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('BCR')}
        >
          BCR
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('Printer')}
        >
          Printer
        </button>
        <button
          style={styles.button}
          onTap={() => navigation.navigate('IOboard')}
        >
          I/O Board
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
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  backButton: {
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
    backgroundColor: '#7b838e',
    borderRadius: 4,
    padding: 0,
    marginRight: 10,
    width: 40,
    height: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',    // Alinea los botones en una fila horizontal
    flexWrap: 'wrap',        // Para que se acomoden al espacio
    justifyContent: 'center',// Centra los botones horizontalmente dentro del contenedor
    alignItems: 'center',    // Centra los botones verticalmente dentro del contenedor
    width: '100%',
  },
  button: {
    fontSize: 24,            // Tamaño de la fuente del texto del botón
    color: 'white',          // Color del texto del botón
    backgroundColor: '#0052fe', // Color de fondo del botón
    width: 150,              // Ancho del botón
    height: 150,             // Alto del botón
    margin: 10,              // Margen alrededor del botón para espaciar
    borderRadius: 8,         // Bordes redondeados del botón
    justifyContent: 'center',// Centra el contenido del botón horizontalmente
    alignItems: 'center',    // Centra el contenido del botón verticalmente
    padding: 0,
  },

});
