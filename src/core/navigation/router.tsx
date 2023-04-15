import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './RootStack';

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
