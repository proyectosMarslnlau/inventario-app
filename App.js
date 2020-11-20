import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
//Imoprtamos el Navigatiojn
import Navigation from './src/navigation/Navigation';
//Importamos los STATE
import AlertState from './src/context/alert/AlertState';
import LoginState from './src/context/login/LoginState';
const App = () => {
  return (
    <LoginState>
      <AlertState>
        <Navigation />
      </AlertState>
    </LoginState>
  );
};

export default App;
