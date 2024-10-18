import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';

import { MainScreen } from './MainScreen';
import { BNRScreen } from './BNRScreen';
import { BCRScreen } from './BCRScreen';

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Main Screen"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Main" component={MainScreen} />
      <StackNavigator.Screen name="BNR" component={BNRScreen} />
      <StackNavigator.Screen name="BCR" component={BCRScreen} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
