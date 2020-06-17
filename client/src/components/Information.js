import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Grid, GridRow, GridColumn, ListContent, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Inforestaurant = (props) => {
  const {
    name,
    province,
    information,
    email,
    commercial,
    description,
    direction,
    category,
    website,
    phone,
  } = props;

  let { url } = useRouteMatch();

  return (
    <>
      <Divider />

      <Grid columns={3} divided>
        <GridRow>
          <GridColumn>
            <center>
              <h3>{name}</h3>
            </center>
            <ListContent>
              <h4>Provincia:</h4> {province}
            </ListContent>
            <ListContent>
              <h4>Informacion:</h4> {information}
            </ListContent>
            <ListContent>
              <h4>e-mail:</h4> {email}
            </ListContent>
            <ListContent>
              <h4>Comercial:</h4> {commercial}
            </ListContent>
            <ListContent>
              <h4>Descripcion:</h4> {description}
            </ListContent>
            <ListContent>
              <h4>Direccion:</h4> {direction}
            </ListContent>
            <ListContent>
              <h4>Categoria</h4> {category}
            </ListContent>
            <ListContent>
              <h4>Sitio Web:</h4>
              {website}
            </ListContent>
            <ListContent>
              <h4>Telefono:</h4> {phone}
            </ListContent>
          </GridColumn>

          <GridColumn>
            <Link to={`${url}/food-gallery`}>ver Comida</Link>
          </GridColumn>

          <GridColumn>
            {" "}
            <Link to={`${url}/restaurant-gallery`}> ver Restaurante</Link>{" "}
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
};

export default Inforestaurant;
