import React, {useContext, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

//Importamos el CONTEXT
import informationContext from '../context/information/informationContext';

//Importamos las medidas del DISPOSITIVO
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';

//
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//------------------------------------------------
const Information = ({navigation}) => {
  //Importamos primero los CONTEXT
  const {
    codigo,
    datos,
    funcionHabilitarCameraQr,
    funcionConsultaObjeto,
  } = useContext(informationContext);
  //--
  useEffect(() => {
    funcionConsultaObjeto(codigo).then((item) => {
      if (item === false) {
        alert('No se puedo cargar la informacion');
      }
    });
    const backAction = async () => {
      funcionHabilitarCameraQr(true);
      navigation.navigate('qr');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  //
  const onPressPasarSreenQr = () => {
    funcionHabilitarCameraQr(true);
    navigation.navigate('qr');
  };

  //------------------------------------------------------------
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ImageBackground
          source={require('../resource/img/borde_top.png')}
          style={styles.image}>
          <View style={styles.seccion_1}>
            <Text style={styles.titulo}>Ficha Tecnica</Text>
            <Text style={styles.texto_information}>
              CODIGO : {datos.code}
              {datos.cifra}
            </Text>
            <Text style={styles.texto_information}>
              {' '}
              NOMBRE : {datos.nombre}
            </Text>
            <Text style={styles.texto_information}>
              {' '}
              COSTO (Bs): {datos.costo}
            </Text>
            <Text style={styles.texto_information}> AÑO : {datos.anio}</Text>
            <Text style={styles.texto_information}>
              {' '}
              ESTADO : {datos.estado}
            </Text>
            <Text style={styles.texto_information}>
              {' '}
              DESCRIPCION : {datos.descripcion}
            </Text>
          </View>
          <View style={styles.seccion_2}>
            <Image style={styles.tinyLogo} source={{uri: datos.imagen}} />
          </View>
          <View style={styles.seccion_3}>
            <Image style={styles.tinyLogo} source={{uri: datos.lugar}} />
          </View>
          <View style={styles.seccion_4}>
            <Button
              title="Volver Atras"
              buttonStyle={styles.boton_atras}
              onPress={onPressPasarSreenQr}
            />
          </View>
        </ImageBackground>
      </ScrollView>
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
  //
  scrollView: {},
  //
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.2,
    marginTop: DEVICE_HEIGHT * 0.3,
    marginHorizontal: 10,
  },
  titulo: {
    fontFamily: 'PFBeauSansPro-BlackItalic',
    color: 'black',
  },
  texto_information: {
    fontFamily: 'Smoolthan Bold-Italic',
    color: 'black',
  },
  //
  seccion_2: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
    marginBottom: 10,
  },

  seccion_3: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.5,
  },
  tinyLogo: {
    width: DEVICE_WIDTH,
    resizeMode: 'contain',
    height: DEVICE_HEIGHT * 0.5,
  },
  seccion_4: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boton_atras: {
    width: DEVICE_WIDTH * 0.9,
  },
});
export default Information;
