import React, {Fragment, useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
//iMPORTAMOS COMPONENTES -> ALERTERROR
import AlertError from '../item/AlertError';
import AlertSuccess from '../item/AlertSuccess';
//Importamos REACT NATIVE ELEMENTS
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
//-------------------- MEDIDAS DE DISPOSITIVO -----------------------
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../resource/js/device';
//Importamos los USECONTEXT
import alertContext from '../context/alert/alertContext';
import loginContext from '../context/login/loginContext';
//---------------------------------------------------------------
const Login = ({navigation}) => {
  //Importamos las varaibles de useContext
  const {funcionAlertError, funcionAlertSuccess} = useContext(alertContext);
  const {funcionPeticionLogin} = useContext(loginContext);
  //USE STATE LOCALES
  const [user, guardarUser] = useState('');
  const [pass, guardarPass] = useState('');

  //Cargamos las variables de entrada de usuario y pass
  const onChangeUsuario = (valor) => {
    guardarUser(valor);
  };
  const onChangePass = (valor) => {
    guardarPass(valor);
  };

  //Funcion que envia las variables de ONPRESS del boton Principal
  const onPressSelector = () => {
    //console.log('dentos cambios de mundo')
    //Saneamiento de VARIABLE de usuario
    guardarUser(user.toLowerCase());
    guardarPass(pass.toLowerCase());

    //Verifica si las variables de entrada estan vacias
    if (user.trim() === '' || pass.trim() === '') {
      //Datos vacios
      let valorError = {
        estado: true,
        mensaje: 'Datos Ingresados Vacios Revise Nuevamente',
      };
      funcionAlertError(valorError);
    } else {
      funcionPeticionLogin(user, pass).then((item) => {
        if (item === false) {
          let valorError = {
            estado: true,
            mensaje: 'Datos Ingresados Incorrectos Revise Nuevamente',
          };
          funcionAlertError(valorError);
        } else {
          let valorSucess = {
            estado: true,
            mensaje: 'Login Correcto',
          };
          funcionAlertSuccess(valorSucess);
          setTimeout(() => {
            navigation.navigate('selector');
          }, 1000);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/borde_inicial.png')}
        style={styles.image}>
        <View style={styles.seccion_1}>
          <Text>Registro de Inventario</Text>
        </View>
        <View style={styles.seccion_2}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Text style={styles.titulo_formulario}>
              Ingrese sus Credenciales
            </Text>
            <Fragment>
              <View style={styles.entradas}>
                <Input
                  placeholder="Usuario"
                  leftIcon={<Icon name="user" size={18} color="black" />}
                  inputStyle={{
                    fontSize: 15,
                    fontFamily: 'Montserrat-Medium',
                  }}
                  onChangeText={onChangeUsuario}
                />
                <Input
                  placeholder="Password"
                  leftIcon={<Icon name="lock" size={18} color="black" />}
                  inputStyle={{
                    fontSize: 15,
                    fontFamily: 'Montserrat-Medium',
                  }}
                  onChangeText={onChangePass}
                />
                <Button title="Ingresar" onPress={onPressSelector} />
              </View>
            </Fragment>
          </KeyboardAvoidingView>
        </View>
        <View style={styles.seccion_3}></View>
        <View style={styles.seccion_4}></View>
      </ImageBackground>
      {/* SECCION DE ALERTS */}
      <AlertError />
      <AlertSuccess />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ///-------------------------------- BACKGROUND TOTAL
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //----------------------------
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.45,
  },
  entradas: {
    marginHorizontal: 10,
  },
  titulo_formulario: {
    margin: 20,
    paddingHorizontal: DEVICE_WIDTH * 0.15,
    fontSize: 16,
  },
  //------------------------------
  seccion_3: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.25,
  },
  seccion_4: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
  },
});
export default Login;
