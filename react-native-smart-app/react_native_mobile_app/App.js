
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import React from 'react';
 import Screen1 from './Screen/Screen1';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Screen1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
