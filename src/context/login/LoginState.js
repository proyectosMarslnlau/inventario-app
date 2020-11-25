import React, {useReducer} from 'react';
//Importamos los USECONSTEXT del LOGIN
import loginContext from './loginContext';
import loginReducer from './loginReducer';
//Importamos las URL  de las peticiones necesarios
import {url_peticion_login} from '../../resource/js/constant';
//Importamos AXIOS
import axios from 'axios';
//Importamos as funciones de ASYNC STORE
import {storeData} from '../../resource/js/storelogin';
//-----------------------------
const LoginState = (props) => {
  const initialState = {
    logueo: false,
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);
  //Funciones DISTPACH
  const funcionPeticionLogin = async (valor_1, valor_2) => {
    //Url de peticion de LOGIN
    const url = url_peticion_login;
    try {
      const peticion = await axios.post(url, {
        user: valor_1,
        pass: valor_2,
      });
      const respuestaPeticion = peticion.data.response;
      if (respuestaPeticion === 'correcto') {
        //Guardamos el logueo en ASYNC STORE
        storeData('activo');
        return true;
      } else {
        return false;
      }
    } catch (error) {
      alert('Error, intente mas tarde');
    }
  };
  return (
    <loginContext.Provider
      value={{
        logueo: state.logueo,
        funcionPeticionLogin,
      }}>
      {props.children}
    </loginContext.Provider>
  );
};

//-----------------------------
export default LoginState;
