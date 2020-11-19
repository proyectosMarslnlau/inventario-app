import React, {useState} from 'react';

import {StyleSheet, Text, View} from 'react-native';
//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
//-----------------------------------------------
const Qr = ({navigation}) => {
  //STATE LOCALES
  const [linterna, guardarLinterna] = useState(false);

  //
  const onPressOnLamp = () => {
    guardarLinterna(!linterna);
  };
  //
  const onSuccess = (e) => {
    console.log(e.data);
  };
  //
  const onPressPasarScreen = () => {
    if (linterna === true) {
      guardarLinterna(!linterna);
    }
    navigation.navigate('information');
  };
  //--------------------------------------------
  return (
    <View style={styles.container}>
      <View style={styles.seccion_0}></View>
      <View style={styles.seccion_1}>
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
      </View>
      <View style={styles.seccion_2}>
        <Button
          title="Encender Linterna"
          buttonStyle={styles.boton}
          onPress={onPressOnLamp}
        />
      </View>
      <View style={styles.seccion_3}>
        <Button
          title="Encender Linterna"
          buttonStyle={styles.boton}
          onPress={onPressPasarScreen}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  seccion_0: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
    backgroundColor: 'white',
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.65,
    backgroundColor: 'red',
  },
  //------------------------------------------
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.1,
    backgroundColor: 'yellow',
    justifyContent: 'center', //ALINEACION VERTICAL
  },
  boton: {
    paddingHorizontal: DEVICE_WIDTH * 0.1,
    borderRadius: 10,
    borderColor: '#FFB718',
    borderWidth: 1,
  },
  //--------------------------------------------
  seccion_3: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Qr;
