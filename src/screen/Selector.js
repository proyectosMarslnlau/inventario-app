import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//Importamos las librerias de MEDIDAS DE PANTALLA
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//

//-----------------------------------------------------------
const Selector = ({navigation}) => {
  const onPressInscription = () => {
    navigation.navigate('inscription');
  };
  //
  const onPressView = () => {
    navigation.navigate('qr');
  };
  return (
    <View style={styles.container}>
      <View style={styles.seccion_1}>
        <Button
          title="Ingresar"
          buttonStyle={styles.boton}
          onPress={onPressInscription}
        />
      </View>
      <View style={styles.seccion_2}>
        <Button
          title="Ingresar"
          buttonStyle={styles.boton}
          onPress={onPressView}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
    backgroundColor: 'yellow',
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
