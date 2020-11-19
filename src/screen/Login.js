import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
//
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
//-------------------- MEDIDAS -----------------------
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../resource/js/device';
//---------------------------------------------------------------
const Login = ({navigation}) => {
  //
  const onPressSelector = () => {
    navigation.navigate('selector');
  };

  return (
    <View style={styles.container}>
      <View style={styles.seccion_1}>
        <Text>Registro de Inventario</Text>
      </View>
      <View style={styles.seccion_2}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Text style={styles.titulo_formulario}>Ingrese sus Credenciales</Text>
          <Fragment>
            <View style={styles.entradas}>
              <Input
                placeholder="Usuario"
                leftIcon={<Icon name="user" size={18} color="black" />}
                inputStyle={{
                  fontSize: 15,
                  fontFamily: 'Montserrat-Medium',
                }}
              />
              <Input
                placeholder="Password"
                leftIcon={<Icon name="lock" size={18} color="black" />}
                inputStyle={{
                  fontSize: 15,
                  fontFamily: 'Montserrat-Medium',
                }}
              />
              <Button title="Ingresar" onPress={onPressSelector} />
            </View>
          </Fragment>
        </KeyboardAvoidingView>
      </View>
      <View style={styles.seccion_3}></View>
      <View style={styles.seccion_4}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seccion_1: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.15,
    backgroundColor: 'red',
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
    backgroundColor: 'red',
  },
});
export default Login;
