import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
//
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../resource/js/device';
//
//
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
//
import Camera from '../item/Camera';
//
import Torch from 'react-native-torch';
import {TouchableHighlight} from 'react-native-gesture-handler';
//--------------------------------------------------
const Inscription = ({navigation}) => {
  //
  const [linterna, guardarLinterna] = useState(false);
  //
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

  //

  //
  const onPressLamp = () => {
    if (linterna === false) {
      Torch.switchState(true);
    } else {
      Torch.switchState(false);
    }
    guardarLinterna(!linterna);
  };
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
        <View>
          <Button
            title="Encender Linterna"
            buttonStyle={styles.boton}
            onPress={onPressLamp}
          />
          <TouchableHighlight onPress={onPressLamp}>
            <Text>APRETAR</Text>
          </TouchableHighlight>
        </View>
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
