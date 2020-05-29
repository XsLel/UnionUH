import React from "react";
import { useRouteMatch } from "react-router-dom";
import {
  Grid,
  GridRow,
  GridColumn,
  ListContent,
  Divider,
} from "semantic-ui-react";
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
      <Grid columns={3} divided>
        <GridRow>
          <GridColumn>
            <ListContent>
              <p>
                <b>Provincia: </b> {province}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Informacion:</b>
                {information}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>e-mail: </b>
                {email}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Comercial:</b> {commercial}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Direccion:</b> {direction}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Categoria</b> {category}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Sitio Web:</b> {website}{" "}
              </p>
            </ListContent>
            <br></br>
            <ListContent>
              <p>
                <b>Telefono:</b> {phone}
              </p>
            </ListContent>
          </GridColumn>

          <GridColumn>
            <Link to={`${url}/food-gallery`}>Galeria Comida</Link>
          </GridColumn>

          <GridColumn>
            {" "}
            <Link to={`${url}/restaurant-gallery`}>
              {" "}
              Galeria Restaurante
            </Link>{" "}
          </GridColumn>
        </GridRow>
      </Grid>
    </>
  );
};

export default Inforestaurant;
