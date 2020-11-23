import React, {useReducer} from 'react';
//Importamos los CONTEXT
import informationContext from './informationContext';
import informationReducer from './informationReducer';
//Importamos los TYPES
import {
  INGRESAR_DATO_INFORMATION,
  HABILITAR_QR_CAMERA,
  GUARDAR_INFORMACION_CODIGO,
} from '../../type/index';
//
import {url_peticion_informacion} from '../../resource/js/constant';
//Importamos AXIOS
import axios from 'axios';
//---------------------------
const InformationState = (props) => {
  const initialState = {
    codigo: '',
    datos: '',
    habilitarqr: true,
  };
  const [state, dispatch] = useReducer(informationReducer, initialState);
  //Funcion que guarda el dato
  const funcionDatoCodigo = (valor) => {
    dispatch({
      type: INGRESAR_DATO_INFORMATION,
      payload: valor,
    });
  };
  //
  const funcionHabilitarCameraQr = (valor) => {
    dispatch({
      type: HABILITAR_QR_CAMERA,
      payload: valor,
    });
  };
  //
  const funcionConsultaObjeto = async (valor) => {
    const url = url_peticion_informacion;
    try {
      const peticion = await axios.post(url, {
        entrada: valor,
      });
      const respuestaPeticion = peticion.data;
      if (respuestaPeticion.response === 'correcto') {
        dispatch({
          type: GUARDAR_INFORMACION_CODIGO,
          payload: peticion.data.information[0],
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      alert('Error intente mas tarde');
    }
  };
  return (
    <informationContext.Provider
      value={{
        codigo: state.codigo,
        habilitarqr: state.habilitarqr,
        datos: state.datos,
        funcionDatoCodigo,
        funcionHabilitarCameraQr,
        funcionConsultaObjeto,
      }}>
      {props.children}
    </informationContext.Provider>
  );
};

export default InformationState;
