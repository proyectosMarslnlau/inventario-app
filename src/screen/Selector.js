import React, {useEffect} from 'react';

import {StyleSheet, Text, View, ImageBackground, Keyboard} from 'react-native';
//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Importamos las librerias de MEDIDAS DE PANTALLA
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//

//-----------------------------------------------------------
const Selector = ({navigation}) => {
  //
  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  //
  const onPressInscription = () => {
    navigation.navigate('inscription');
  };
  //
  const onPressView = () => {
    navigation.navigate('qr');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/borde_total.jpg')}
        style={styles.image}>
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
});
export default Selector;
