import React, {useState, useEffect, useContext} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
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

//
import {Picker} from '@react-native-community/picker';

//--------------------------------------------------
const Inscription = ({navigation}) => {
  //Importamos las variables del CONTEXT
  const {funcionEnviarInformacion} = useContext(inscriptionContext);

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
    const backAction = async () => {
      Torch.switchState(false);
      navigation.navigate('selector');
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  //funcion para poder ENCENDER y APAGAR LAMPARA
  const onPressLamp = () => {
    if (linterna === false) {
      Torch.switchState(true);
    } else {
      Torch.switchState(false);
    }
    guardarLinterna(!linterna);
  };

  //funcion Enviar informacion de usuario
  const onPressEnviar = () => {
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
      alert('datos vacios');
    } else {
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
      );
    }
  };

  //************************************************************************* */
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.seccion_1}></View>
        <View style={styles.seccion_input}>
          <Text>CODIGO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            keyboardType="default"
            onChangeText={onChangeCode}
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>NUMERO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            keyboardType="numeric"
            onChangeText={onChangeCifra}
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>NOMBRE</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            onChangeText={onChangeNombre}
          />
        </View>
        <Picker
          style={styles.selector}
          onValueChange={onChangeLugar}
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
          <Text>COSTO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            keyboardType="numeric"
            onChangeText={onChangeCosto}
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>AÑO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            keyboardType="numeric"
            onChangeText={onChangeAnio}
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>ESTADO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            onChangeText={onChangeEstado}
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>DESCRIPCION</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
            onChangeText={onChangeDescripcion}
          />
        </View>
        <Camera imagen={imagen} guardarImagen={guardarImagen} />
        <View>
          <Button
            title="Encender Linterna"
            buttonStyle={styles.boton}
            onPress={onPressLamp}
          />
        </View>
        <View>
          <Button
            title="Enviar la Informacion"
            buttonStyle={styles.boton}
            onPress={onPressEnviar}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  scrollView: {},
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
  },
  seccion_input: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  selector: {
    color: 'black',
    height: 50,
    width: DEVICE_WIDTH,
    borderRadius: 10,
    backgroundColor: 'red',
    fontFamily: 'Montserrat-Medium',
  },
});
export default Inscription;
