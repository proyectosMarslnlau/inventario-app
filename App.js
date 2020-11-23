import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
//Imoprtamos el Navigatiojn
import Navigation from './src/navigation/Navigation';
//Importamos los STATE
import AlertState from './src/context/alert/AlertState';
import LoginState from './src/context/login/LoginState';
import InformationState from './src/context/information/InformationState';
import InscriptionState from './src/context/inscription/InscriptionState';
//--------------------
const App = () => {
  return (
    <InscriptionState>
      <InformationState>
        <LoginState>
          <AlertState>
            <Navigation />
          </AlertState>
        </LoginState>
      </InformationState>
    </InscriptionState>
  );
};

export default App;
