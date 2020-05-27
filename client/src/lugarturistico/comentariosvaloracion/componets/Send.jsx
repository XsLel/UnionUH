import React from 'react';
import { Button,Grid } from 'semantic-ui-react'
import './css/Enviar.css'
import {http} from '../../../services'

const Send = (props) => {

    const sendData=()=>{
        if(!props.states.politicalTerms){
            alert('Acepte los términos y políticas de la aplicación')
        }else{
            if(props.Outcome.calificacionGeneral === 0){
                alert('Calificacion General es campo obligatorio')
            }else{
                if(!props.Outcome.tituloComentario){
                    alert('El campo título del comentario es obligatorio')
                }else{
                    if(props.states.count<19 ){
                        alert('El comentario es muy corto')
                    }else{
                        if(!props.Outcome.fechaVisita){
                            alert('Seleccion el año y mes de su visita. Es un campo obligatorio')
                        }else{
                            http.request({
                                method: 'POST' ,
                                url:'http://localhost:8585/api/comentario', 
                                data:props.Outcome
                            }).then(res=>console.log(res))
                            alert('Su comentario se envio correctamente')
                        }
                    }
                }
            }
        }
    }
    return ( 
         <Grid.Column>
               <Button onClick={sendData} primary>Enviar</Button>
             <p>Tu experiencia es muy valiosa para otros viajeros ¡Muchas Gracias!</p>
              
         </Grid.Column>
     );
}
 
export default Send;