import React from 'react';
//
import {View, StyleSheet} from 'react-native';
//Importamos el navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Importamos los SCREEN
import Information from '../screen/Information';
import Inscription from '../screen/Inscription';
import Login from '../screen/Login';
import Qr from '../screen/Qr';
import Selector from '../screen/Selector';

//Creamos la variable de navigation
const Stack = createStackNavigator();

//------------------------------------------
const Navigation = () => {
  //Efectos de NAVIGATION de usuario EFECTOS DE CAMBIO
  const forFade = ({current}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="selector"
          component={Selector}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="inscription"
          component={Inscription}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="qr"
          component={Qr}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
        <Stack.Screen
          name="information"
          component={Information}
          options={{
            headerShown: false,
            cardStyleInterpolator: forFade,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
