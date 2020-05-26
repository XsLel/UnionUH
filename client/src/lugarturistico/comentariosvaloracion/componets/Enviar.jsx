import React from 'react';
import { Button,Grid } from 'semantic-ui-react'
import './css/Enviar.css'
import axios from 'axios';

const Enviar = ({resultado}) => {

    const hacerPost=()=>{
        axios({
            method: 'POST' ,
            url:'http://localhost:8585/comentario', 
            data:resultado
        }).then(res=>console.log(res.data))
    }
    return ( 
         <Grid.Column>
               <Button onClick={hacerPost} primary>Enviar</Button>
             <p>Tu experiencia es muy valiosa para otros viajeros ¡Muchas Gracias!</p>
              
         </Grid.Column>
     );
}
 
export default Enviar;