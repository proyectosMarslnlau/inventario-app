import React, {useState, useEffect, useContext, useRef} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
  ImageBackground,
} from 'react-native';

//Importamos las librrerias de MEDIDAS DE DISPOSITIVO
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';

//Componentes de REACT NATIVE ELEMENTS
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

//Componente de CAMERA
import Camera from '../item/Camera';

//Libreria de LINTERNA DE DISPOSTIVO
import Torch from 'react-native-torch';

//Importamos los context de ENVIO DE INFORMACION
import inscriptionContext from '../context/inscription/inscriptionContext';
import alertContext from '../context/alert/alertContext';

//
import {Picker} from '@react-native-community/picker';

//--------------------------------------------------
const Inscription = ({navigation}) => {
  //Importamos las variables del CONTEXT
  const {funcionEnviarInformacion} = useContext(inscriptionContext);
  const {funcionAlertError, funcionAlertSuccess} = useContext(alertContext);

  //
  //--------------------------------------------
  const scrollRef = useRef();

  //USE LOCALES
  //**** STATE LOCAL para encender y apagar LINTERNA */
  const [linterna, guardarLinterna] = useState(false);
  //**** STATE LOCAL variables de formulario */
  const [code, guardarCode] = useState('');
  const [cifra, guardarCifra] = useState('');
  const [nombre, guardarNombre] = useState('');
  const [lugar, guardarLugar] = useState('');
  const [costo, guardarCosto] = useState('');
  const [anio, guardarAnio] = useState('');
  const [estado, guardarEstado] = useState('');
  const [descripcion, guardarDescripcion] = useState('');
  const [imagen, guardarImagen] = useState('');
  //  Cargamos las variables del formulario en los STATE
  const onChangeCode = (valor) => {
    guardarCode(valor);
  };
  const onChangeCifra = (valor) => {
    guardarCifra(valor);
  };
  const onChangeNombre = (valor) => {
    guardarNombre(valor);
  };
  const onChangeLugar = (valor) => {
    guardarLugar(valor);
    console.log(valor);
  };
  const onChangeCosto = (valor) => {
    guardarCosto(valor);
  };
  const onChangeAnio = (valor) => {
    guardarAnio(valor);
  };
  const onChangeEstado = (valor) => {
    guardarEstado(valor);
  };
  const onChangeDescripcion = (valor) => {
    guardarDescripcion(valor);
  };

  //Use Efecto que tiene por funcion Colocar el BOTON DE RETROCESO
  useEffect(() => {
    //Funcion para boton de RETROCESO de ANDROID
    const backAction = async () => {
      /* Pasar de SCREEN a SELECTOR  */
      navigation.navigate('selector');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  //Funcion Enviar informacion de usuario
  const onPressEnviar = () => {
    //Verifica que los valores no esten vacios
    if (
      code.trim() === '' ||
      cifra.trim() === '' ||
      nombre.trim() === '' ||
      costo.trim() === '' ||
      anio.trim() === '' ||
      estado.trim() === '' ||
      descripcion.trim() === '' ||
      lugar.trim() === '' ||
      Object.keys(imagen).length === 0
    ) {
      //ALERT DE ERROR cuando los datos de formulario estan VACIOS
      let valorError = {
        estado: true,
        mensaje: 'Formulario Vacio, revise los datos nuevamente',
      };
      funcionAlertError(valorError);
    } else {
      //Envio de informacion al SERVIDOR
      funcionEnviarInformacion(
        code,
        cifra,
        nombre,
        lugar,
        costo,
        anio,
        imagen,
        descripcion,
        estado,
      ).then((item) => {
        if (item === true) {
          let valorSucess = {
            estado: true,
            mensaje: 'Inscripcion Correcto',
          };
          funcionAlertSuccess(valorSucess);
          resetFormulario();
          volverInicio();
        } else {
          let valorError = {
            estado: true,
            mensaje: 'Error, No se pudo Inscribir el Objeto, Intente mas tarde',
          };
          funcionAlertError(valorError);
        }
      });
    }
  };

  //Funcion para resetear las variables
  const resetFormulario = () => {
    guardarCode('');
    guardarCifra('');
    guardarNombre('');
    guardarLugar('Seleccion una Opcion');
    guardarCosto('');
    guardarAnio('');
    guardarEstado('');
    guardarDescripcion('');
    guardarImagen('');
  };

  //Funcion para volver al INICIO de SCROLL
  const volverInicio = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  //************************************************************************* */
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../resource/img/borde_inicial.png')}
        style={styles.image}>
        <ScrollView style={styles.scrollView} ref={scrollRef}>
          <View style={styles.seccion_1}></View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>CODIGO</Text>
            <Input
              placeholder="Ingrese el Codigo"
              leftIcon={
                <Icon name="cube" size={18} color="black" type="font-awesome" />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              keyboardType="default"
              onChangeText={onChangeCode}
              value={code}
            />
          </View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>NUMERO</Text>
            <Input
              placeholder="Ingrese el numero"
              leftIcon={
                <Icon
                  name="cubes"
                  size={18}
                  color="black"
                  type="font-awesome"
                />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              keyboardType="numeric"
              onChangeText={onChangeCifra}
              value={cifra}
            />
          </View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>NOMBRE</Text>
            <Input
              placeholder="Ingrese el Nombre"
              leftIcon={
                <Icon name="tag" size={18} color="black" type="font-awesome" />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              onChangeText={onChangeNombre}
              value={nombre}
            />
          </View>
          <Text style={styles.texto_lugar}>LUGAR</Text>
          <Picker
            style={styles.selector}
            onValueChange={onChangeLugar}
            selectedValue={lugar}
            pickerStyleType={{
              fontFamily: 'Montserrat-Medium',
            }}>
            <Picker.Item
              label="Seleccion una Opcion"
              value=""
              itemStyle={styles.options}
            />
            <Picker.Item label="Area REALIDAD PERDIDA" value="boljov-001" />
            <Picker.Item label="Area SKYWORTH" value="boljov-002" />
            <Picker.Item label="Area TRICASTER" value="boljov-003" />
            <Picker.Item label="Area BOPLUS" value="boljov-004" />
            <Picker.Item label="Area VESTUARIO" value="boljov-005" />
            <Picker.Item label="Area PRESENTACIONES" value="boljov-006" />
            <Picker.Item label="Area ESTUDIO" value="boljov-007" />
            <Picker.Item label="Area QD SHOW" value="boljov-008" />
            <Picker.Item label="Area COCINA" value="boljov-009" />
            <Picker.Item label="Area PASILLO" value="boljov-010" />
            <Picker.Item label="Area SOPORTE TECNICO" value="boljov-011" />
            <Picker.Item label="Area PRODUCCION" value="boljov-012" />
            <Picker.Item label="Area GERENCIA GENERAL" value="boljov-013" />
            <Picker.Item label="Area GERENCIA COMERCIAL" value="boljov-014" />
            <Picker.Item label="Area RADIO" value="boljov-015" />
          </Picker>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>COSTO</Text>
            <Input
              placeholder="Ingrese el costo"
              leftIcon={
                <Icon
                  name="diamond"
                  size={18}
                  color="black"
                  type="font-awesome"
                />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              keyboardType="numeric"
              onChangeText={onChangeCosto}
              value={costo}
            />
          </View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>AÑO</Text>
            <Input
              placeholder="Ingrese el Año"
              leftIcon={
                <Icon
                  name="hourglass"
                  size={18}
                  color="black"
                  type="font-awesome"
                />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              keyboardType="numeric"
              onChangeText={onChangeAnio}
              value={anio}
            />
          </View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>ESTADO</Text>
            <Input
              placeholder="Ingrese el Estado"
              leftIcon={
                <Icon
                  name="rocket"
                  size={18}
                  color="black"
                  type="font-awesome"
                />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              onChangeText={onChangeEstado}
              value={estado}
            />
          </View>
          <View style={styles.seccion_input}>
            <Text style={styles.texto}>DESCRIPCION</Text>
            <Input
              placeholder="Ingrese la Descripcion"
              leftIcon={
                <Icon
                  name="minus-square"
                  size={18}
                  color="black"
                  type="font-awesome"
                />
              }
              inputStyle={{
                fontSize: 15,
                fontFamily: 'Montserrat-Medium',
              }}
              onChangeText={onChangeDescripcion}
              value={descripcion}
            />
          </View>
          <Camera imagen={imagen} guardarImagen={guardarImagen} />
          <View>
            <Button
              title="Enviar la Informacion"
              buttonStyle={styles.boton}
              onPress={onPressEnviar}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  //CONTAINER
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
  //Seccion de PANEO de IMAGEN de FONDO
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
  },
  //Seccion de CSS de los INPUT
  seccion_input: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  //Seccion de CSS para el SELECTOR
  selector: {
    color: 'black',
    height: 50,
    width: DEVICE_WIDTH,
    borderRadius: 10,
    fontFamily: 'Montserrat-Medium',
  },
  //
  texto_lugar: {
    paddingHorizontal: 5,
  },
  texto: {
    color: 'black',
    fontFamily: 'PFBeauSansPro-Regular',
  },
});
export default Inscription;
