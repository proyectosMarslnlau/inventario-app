import React, {useContext, useState, useEffect} from 'react';

import {StyleSheet, Text, View, ImageBackground} from 'react-native';
//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
//Importamos los CONTEXT
import informationContext from '../context/information/informationContext';
//-----------------------------------------------
const Qr = ({navigation}) => {
  //IMPORTAMOS LAS VARIABLES DEL CONTEXT
  const {habilitarqr, funcionDatoCodigo, funcionHabilitarCameraQr} = useContext(
    informationContext,
  );
  //UseEFFECT
  useEffect(() => {}, []);

  //STATE LOCALES
  const [linterna, guardarLinterna] = useState(false);

  //
  const onPressOnLamp = () => {
    guardarLinterna(!linterna);
  };
  //
  const onSuccess = (e) => {
    if (e !== '') {
      if (linterna === true) {
        guardarLinterna(!linterna);
      }
      funcionDatoCodigo(e.data);
      funcionHabilitarCameraQr(false);
      navigation.navigate('information');
    }
  };
  //
  const onPressPasarScreen = () => {
    navigation.navigate('information');
  };
  //--------------------------------------------
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/borde_inicial.png')}
        style={styles.image}>
        <View style={styles.seccion_1}>
          {habilitarqr ? (
            <QRCodeScanner
              onRead={onSuccess}
              flashMode={
                linterna
                  ? RNCamera.Constants.FlashMode.torch
                  : RNCamera.Constants.FlashMode.off
              }
              reactivate={true}
              permissionDialogMessage="nees"
              reactivateTimeout={10}
              showMarker={true}
              markerStyle={{borderColor: '#fff', borderRadius: 10}}
            />
          ) : null}
        </View>
        <View style={styles.seccion_2}>
          <Button
            title="Encender Linterna"
            buttonStyle={styles.boton}
            onPress={onPressOnLamp}
          />
        </View>
        <View style={styles.seccion_3}></View>
        <View style={styles.seccion_4}></View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  ///-------------------------------- BACKGROUND TOTAL
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.65,
    backgroundColor: 'black',
  },
  //------------------------------------------
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.1,
    justifyContent: 'center', //ALINEACION VERTICAL
    alignItems: 'center',
  },
  boton: {
    width: DEVICE_WIDTH * 0.8,
    marginTop: DEVICE_WIDTH * 0.1,
    paddingHorizontal: DEVICE_WIDTH * 0.1,
    borderRadius: 10,
    borderColor: '#FFB718',
    borderWidth: 1,
  },
  //--------------------------------------------
  seccion_3: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seccion_4: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
  },
});
export default Qr;
