import React from 'react';
import { Button, Grid,GridRow, GridColumn } from 'semantic-ui-react'

const Cuestionario = () => {
    return ( 
       <GridColumn>
           <h2>Cuestionario(opcional)</h2>
            
            <Grid columns={2}>
                <GridRow>
                        <p>Lorem ipsum dolor sit amet?</p>
                        <Button.Group buttons={['Si', 'No', 'No se']} />
                </GridRow>
             </Grid>
             <Grid columns={2}>
                <GridRow>
                        <p>Lorem ipsum dolor sit amet?</p>
                        <Button.Group buttons={['Si', 'No', 'No se']} />
                </GridRow>
             </Grid>
             <Grid columns={2}>
                <GridRow>
                        <p>Lorem ipsum dolor sit amet?</p>
                        <Button.Group buttons={['Si', 'No', 'No se']} />
                </GridRow>
             </Grid>
             <Grid columns={2}>
                <GridRow>
                        <p>Lorem ipsum dolor sit amet?</p>
                        <Button.Group buttons={['Si', 'No', 'No se']} />
                </GridRow>
             </Grid>
       </GridColumn>
     );
}
 
export default Cuestionario;