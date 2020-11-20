import React, {useReducer} from 'react';
//Importamos los USECONSTEXT del LOGIN
import loginContext from './loginContext';
import loginReducer from './loginReducer';
//Importamos las URL  de las peticiones necesarios
import {url_peticion_login} from '../../resource/js/constant';
//-----------------------------
const LoginState = (props) => {
  const initialState = {
    logueo: false,
  };
  const [state, dispatch] = useReducer(loginReducer, initialState);
  //Funciones DISTPACH
  const funcionPeticionLogin = (valor_1, valor_2) => {
    //Url de peticion de LOGIN
    const url = url_peticion_login;
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
