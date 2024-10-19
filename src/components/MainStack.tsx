import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from 'react';
import { stackNavigatorFactory } from 'react-nativescript-navigation';

import { MainScreen } from './MainScreen';
import { BNRScreen } from './BNRScreen';
import { BCRScreen } from './BCRScreen';
import { PrinterScreen } from './PrinterScreen';
import { IOBoardScreen } from './IOBoardScreen';

import { TopModuleScreen } from './TopModuleScreen';
import { RecyclerScreen } from './RecyclerScreen';
import { CashBoxScreen } from './CashBoxScreen';

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
          //backgroundColor: 'white',
        },
        headerShown: false,
      }}
    >
      <StackNavigator.Screen name="Main" component={MainScreen} />
      <StackNavigator.Screen name="BNR" component={BNRScreen} />
      <StackNavigator.Screen name="BCR" component={BCRScreen} />
      <StackNavigator.Screen name="Printer" component={PrinterScreen} />
      <StackNavigator.Screen name="IOboard" component={IOBoardScreen} />
      <StackNavigator.Screen name="TopModule" component={TopModuleScreen} />
      <StackNavigator.Screen name="CashBox" component={CashBoxScreen} />
      <StackNavigator.Screen name="Recycler" component={RecyclerScreen} />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
