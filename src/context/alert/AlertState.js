import React, {useReducer} from 'react';
//importamos los context
import alertContext from './alertContext';
import alertReducer from './alertReducer';
//
import {CAMBIAR_ESTADO_ERROR, CAMBIAR_ESTADO_EXITOSO} from '../../type/index';
//------------------------------------
const AlertState = (props) => {
  const initialState = {
    alerterror: {
      estado: false,
      mensaje: null,
    },
    alertsuccess: {
      estado: false,
      mensaje: null,
    },
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const funcionAlertError = (valor) => {
    dispatch({
      type: CAMBIAR_ESTADO_ERROR,
      payload: valor,
    });
  };
  const funcionAlertSuccess = (valor) => {
    dispatch({
      type: CAMBIAR_ESTADO_EXITOSO,
      payload: valor,
    });
  };
  //funciones disptach
  return (
    <alertContext.Provider
      value={{
        alerterror: state.alerterror,
        alertsuccess : state.alertsuccess,
        funcionAlertError,
        funcionAlertSuccess
      }}>
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
