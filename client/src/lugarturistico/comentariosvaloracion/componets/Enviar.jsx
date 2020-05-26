import React from 'react';
import { Button,Grid } from 'semantic-ui-react'
import './css/Enviar.css'
const Enviar = () => {
    return ( 
         <Grid.Column>
               <Button primary>Enviar</Button>
             <p>Tu experiencia es muy valiosa para otros viajeros ¡Muchas Gracias!</p>
         </Grid.Column>
     );
}
 
export default Enviar;