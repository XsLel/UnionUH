import React from 'react'
import { Header,Image } from 'semantic-ui-react'
const LugarActual = () => {
    return ( 
        <Header as='h2'>
        <Image src='./img/img1.jpg' size='small' wrapped />
        <Header.Content>
          Lugar Turistico Actual
          <Header.Subheader>Descripcion del lugar turistico</Header.Subheader>
        </Header.Content>
      </Header>
     );
}
 
export default LugarActual;