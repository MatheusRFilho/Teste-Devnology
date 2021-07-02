// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Financial from './pages/financial';
import Vehicles from './pages/vehicles';
import Buy from './pages/buy';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="financial" component={Financial} />
        <AppStack.Screen name="vehicles" component={Vehicles} />
        <AppStack.Screen name="buy" component={Buy} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
