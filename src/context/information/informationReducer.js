//Importamos los TYPES
import {
  INGRESAR_DATO_INFORMATION,
  HABILITAR_QR_CAMERA,
  GUARDAR_INFORMACION_CODIGO,
} from '../../type/index';

export default (state, action) => {
  switch (action.type) {
    case INGRESAR_DATO_INFORMATION:
      return {
        ...state,
        codigo: action.payload,
      };
    case HABILITAR_QR_CAMERA:
      return {
        ...state,
        habilitarqr: action.payload,
      };
    case GUARDAR_INFORMACION_CODIGO:
      return {
        ...state,
        datos: action.payload,
      };
    default:
      return state;
  }
};
