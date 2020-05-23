import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
import { Link, Redirect } from "react-router-dom";

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
          <Link to="/galeria-comida">Galeria Comida</Link>
        </GridColumn>
        <GridColumn>
          {" "}
          <Link to="/galeria-restaurante"> Galeria Restaurante</Link>{" "}
        </GridColumn>
      </GridRow>
    </Grid>
  </>
);

export default Inforestaurant;
