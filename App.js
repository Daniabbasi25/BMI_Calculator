import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CalculatorScreen from './src/screens/CalculatorScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultScreen from './src/screens/ResultScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CalculatorScreen">
        <Stack.Screen
          name="CalculatorScreen"
          component={CalculatorScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#0b0e21',
            },
            title: 'BMI Calculator',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#0b0e21',
            },
            title: 'BMI Calculator',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
