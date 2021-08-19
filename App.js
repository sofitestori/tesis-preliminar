// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase'
require('firebase/auth')


import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Addpatient from './components/addpatient';
import AddMedicine from './components/addmedicine';
import MedicineList from './components/medicinelist';




const Stack = createStackNavigator();


function Authentication() {
  var user = firebase.auth().currentUser;
  console.log(user)
  if (user) {
    return <Initial screen="Dashboard" />;
  }
  return <Initial screen="Signup" />;
}

function Initial(props) {
  return (
    <Stack.Navigator
      initialRouteName={props.screen}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={
         {title: 'CheckApp - MENU'}
       }
      />
      <Stack.Screen 
        name="Addpatient" 
        component={Addpatient} 
        options={{ title: 'Agregar Paciente' }}
      />
      <Stack.Screen 
        name="AddMedicine" 
        component={AddMedicine} 
        options={{ title: 'Agregar Medicamento' }}
      />
      <Stack.Screen 
        name="MedicineList" 
        component={MedicineList} 
        options={{ title: 'Medicamento x Paciente' }}
      />       
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  );
}