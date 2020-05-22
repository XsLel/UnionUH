import React from "react";
import {
  Grid,
  GridRow,
  GridColumn,
  Card,
  List,
  ListItem,
  ListIcon,
  ListContent,
  Divider,
  Image,
} from "semantic-ui-react";

const Inforestaurant = () => (
  <>
    <Divider />

    <Grid columns={3} divided>
      <GridRow>
        <GridColumn stretched>
          <Card centered>
            <List>
              <ListItem>
                <ListContent>provincia</ListContent>
                <ListContent>direccion</ListContent>
                <ListContent>telefono</ListContent>
              </ListItem>
            </List>
          </Card>
        </GridColumn>

        <GridColumn>
          <Card centered>
            aqui ira las fotos de la galeria de comida
            <a href="#">ver mas</a>
          </Card>
        </GridColumn>

        <GridColumn>
          <Card centered>
            aqui ira las fotos del restaurante
            <a href="#">ver mas</a>
          </Card>
        </GridColumn>
      </GridRow>
    </Grid>
  </>
);

export default Inforestaurant;
