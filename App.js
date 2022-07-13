import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddCard from './src/screens/addCard';
import EditCard from './src/screens/editCard';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="addCard" component={AddCard} />
        <Stack.Screen name="editCard" component={EditCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Navigators = () => <AppStack />;

export default Navigators;
