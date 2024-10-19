import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';
import { useState } from 'react';
import { MainStackParamList } from '../NavigationParamList';
import { whiteSpaceProperty } from '@nativescript/core';

// Error database (codes, associated texts, and descriptions)
const errorCodes: { [key: string]: { message: string, description: string } } = {
  "001": { message: "Equipo apagado", description: "El equipo está completamente apagado." },
  "002": { message: "Equipo suspendido", description: "El equipo está en modo suspendido." },
  // You can add more error codes here
};

type TopModuleScreenProps = {
  route: RouteProp<MainStackParamList, 'TopModule'>;
  navigation: FrameNavigationProp<MainStackParamList, 'TopModule'>;
};

export function TopModuleScreen({ navigation, route }: TopModuleScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [errorResult, setErrorResult] = useState<{ message: string, description: string } | null>(null);

  // Function to search for errors in the database
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const result = errorCodes[query];
    setErrorResult(result || { message: "Código no encontrado", description: "No se encontró información para este código." });
  };

  return (
    <flexboxLayout style={styles.container}>
      <flexboxLayout style={styles.headerContainer}>
        <button style={styles.backButton} onTap={() => navigation.navigate('BNR')}>
          ❮❮
        </button>
        <label style={styles.label}>Ingresar el código:</label>
      </flexboxLayout>
      <textField
        hint="Buscar..."
        text={searchQuery}
        onTextChange={(e) => handleSearch(e.value || '')}
        style={styles.searchBar}
      />
      {errorResult && (
        <flexboxLayout style={styles.resultContainer}>
          <label style={styles.resultText}>{errorResult.message}</label>
          <label style={styles.descriptionText} textWrap={true}>{errorResult.description}</label>
        </flexboxLayout>
      )}
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
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 32,
  },
  text: {
    textAlignment: 'left',
    fontSize: 20,
    color: '#7b838e',
  },
  searchBar: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
    width: '90%',
  },
  resultContainer: {
    flexDirection: 'column',
    flexGrow: 1,
    width: '85%',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 24,
    color: 'black',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 20,
    color: '#7b838e',
    textWrap: true,
    width: '100%',
  },
  headerContainer: {
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
  headerText: {
    fontSize: 20,
    color: '#7b838e',
    flexGrow: 1,
  },
});
