import React from 'react';

import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//
//
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
//
import Camera from '../item/Camera';
//--------------------------------------------------
const Inscription = () => {
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
          />
        </View>
        <View style={styles.seccion_input}>
          <Text>COSTO</Text>
          <Input
            placeholder="Usuario"
            leftIcon={<Icon name="user" size={18} color="black" />}
            inputStyle={{
              fontSize: 15,
              fontFamily: 'Montserrat-Medium',
            }}
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
          />
        </View>
        <Camera />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: 'pink',
  },
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
});
export default Inscription;