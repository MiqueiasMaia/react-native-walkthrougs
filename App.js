import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/Home';
import AboutScreen from './src/views/About';
import LoginScreen from './src/views/Login';
import DatabaseInit from './data/DatabaseInit';

const Stack = createNativeStackNavigator();

function App() {
  
  useEffect(() => {
    new DatabaseInit();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;