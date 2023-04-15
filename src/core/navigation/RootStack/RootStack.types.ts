import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackRoutes} from './RootStack.routes';

export type RootStackRoutesType = keyof typeof RootStackRoutes;

export type RootStackParams = {
  [RootStackRoutes.Login]: undefined;
};

export type RootStackRoute<T extends RootStackRoutesType> = RouteProp<
  RootStackParams,
  T
>;

export type RootStackNavigation<T extends RootStackRoutesType> =
  StackNavigationProp<RootStackParams, T>;
