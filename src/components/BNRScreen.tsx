import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type BNRScreenProps = {
  route: RouteProp<MainStackParamList, 'BNR'>;
  navigation: FrameNavigationProp<MainStackParamList, 'BNR'>;
};

export function BNRScreen({ navigation, route }: BNRScreenProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label style={styles.text}>BNR Errors</label>
      <label style={styles.text}>Message: {route.params.message}</label>
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
    justifyContent: 'center',
    backgroundColor: 'yellow',
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
