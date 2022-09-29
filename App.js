<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React, {useEffect} from 'react';
>>>>>>> b2a4d20fda6107f090344a6f8b8503d6d7eaf965
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/views/Home';
import AboutScreen from './src/views/About';
import LoginScreen from './src/views/Login';
<<<<<<< HEAD
import DatabaseInit from './data/DatabaseInit';
=======
import DatabaseInit from './db/DatabaseInit'
>>>>>>> b2a4d20fda6107f090344a6f8b8503d6d7eaf965

const Stack = createNativeStackNavigator();

function App() {
<<<<<<< HEAD
  
  useEffect(() => {
    new DatabaseInit();
  }, []);
=======

  useEffect(() => {
    new DatabaseInit();
  },[]);
>>>>>>> b2a4d20fda6107f090344a6f8b8503d6d7eaf965

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