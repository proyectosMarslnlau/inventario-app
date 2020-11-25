import React, {useEffect, useContext} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Keyboard,
  BackHandler,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Importamos las librerias de MEDIDAS DE PANTALLA
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//
import {getData, removeData} from '../resource/js/storelogin';
//Importamos los USECONTEXT
import alertContext from '../context/alert/alertContext';
//-----------------------------------------------------------
const Selector = ({navigation}) => {
  //
  //Importamos las varaibles de useContext
  const {funcionAlertError, funcionAlertSuccess} = useContext(alertContext);
  //
  useEffect(() => {
    getData().then((item) => {
      if (item !== null) {
        console.log(item);
      } else {
        console.log('STORE VACIO');
      }
    });
    //
    Keyboard.dismiss();
    //
    const backAction = () => {
      ///+++++++++++++++++++++++++++++++++++++
      //Pregunta si realmente se desea SALIR
      Alert.alert('Salir', 'Esta seguro de Salir', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    //Ejecucion de la funcion de RETROCESO
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  //
  const onPressInscription = () => {
    navigation.navigate('inscription');
  };
  //
  const onPressView = () => {
    navigation.navigate('qr');
  };
  //
  const onPressCloseSesion = () => {
    removeData().then((item) => {
      if (item === true) {
        let valorSucess = {
          estado: true,
          mensaje: 'Sesion Cerrada Correctamente',
        };
        funcionAlertSuccess(valorSucess);
        setTimeout(() => {
          navigation.navigate('login');
        }, 1000);
      }
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/borde_total.jpg')}
        style={styles.image}>
        <TouchableOpacity
          onPress={onPressCloseSesion}
          style={styles.boton_salir}>
          <Text style={styles.texto_boton_salir}>Cerrar Sesion</Text>
        </TouchableOpacity>
        <View style={styles.seccion_1}>
          <Button
            title="Registrar Objeto"
            buttonStyle={styles.boton}
            onPress={onPressInscription}
          />
        </View>
        <View style={styles.seccion_2}>
          <Button
            title="Ingresar Visor QR"
            buttonStyle={styles.boton}
            onPress={onPressView}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'black',
  },
  ///-------------------------------- BACKGROUND TOTAL
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,

    justifyContent: 'center',
    alignItems: 'center',
  },
  boton: {
    paddingHorizontal: DEVICE_WIDTH * 0.1,
    borderRadius: 10,
    borderColor: '#FFB718',
    borderWidth: 1,
  },
  boton_salir: {
    height: DEVICE_HEIGHT * 0.07,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  texto_boton_salir: {
    color: 'blue',
    fontFamily: 'PFBeauSansPro-Regular',
    fontSize: 16,
  },
});
export default Selector;
