import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const Stack = createStackNavigator();

const ScreenPlaceholder: React.FC = () => <View />;

export const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TEST" component={ScreenPlaceholder} />
    </Stack.Navigator>
  );
};
