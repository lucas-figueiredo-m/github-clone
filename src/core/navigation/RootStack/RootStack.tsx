import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import {RootStackParams} from './RootStack.types';
import {RootStackRoutes} from './RootStack.routes';

const Stack = createStackNavigator<RootStackParams>();

const ScreenPlaceholder: React.FC = () => <View />;

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RootStackRoutes.Login}
        component={ScreenPlaceholder}
      />
    </Stack.Navigator>
  );
};
