import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type RecyclerScreenProps = {
  route: RouteProp<MainStackParamList, 'Recycler'>;
  navigation: FrameNavigationProp<MainStackParamList, 'Recycler'>;
};

export function RecyclerScreen({ navigation, route }: RecyclerScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>BCR Errors</label>
      
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
