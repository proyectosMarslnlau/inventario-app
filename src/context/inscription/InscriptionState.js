import React, {useReducer} from 'react';
//Imortamos los CONTEXT
import inscriptionContext from './inscriptionContext';
import inscriptionReducer from './inscriptionReducer';
//Importamos la libreria AXIOS
import axios from 'axios';
//Importamos la funcion de URL
import {} from '../../resource/js/constant'
//-----------------------------------------------------
const InscriptionState = (props) => {
    const initialState = {

    }
    const [state, dispatch] = useReducer(inscriptionReducer, initialState);

    //Funcion enviar datos a la API
    const funcionEnviarInformacion = async(valor_1, valor_2, valor_3, valor_4, valor_5, valor_6, valor_7) => {
        try {
            const url = url_peticion_envio_informacion;
            const peticion = await axios.post(url , {
                code : valor_1,
                cifra : valor_2,
                nombre : valor_3,
                lugar : valor_4,
                costo : valor_5,
                anio : valor_6,
                imagen : valor_7,
                descripcion : valor_8,
                estado : valor_8
            })
            const peticionRespuesta = peticion.data;
            if( peticionRespuesta.response === "correcto"){
                alert('correcto')
            }else{
                alert('ERROR')
            }
        } catch (error) {
            alert('error de servidor')
        }
    }
    return ( 
        <inscriptionContext.Provider
            value={{
                funcionEnviarInformacion
            }}
        >
            {props.children}
        </inscriptionContext.Provider>
     );
}
 
export default InscriptionState;