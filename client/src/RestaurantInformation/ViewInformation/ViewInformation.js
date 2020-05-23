import React from "react";
import { Segment } from "semantic-ui-react";

const ViewInformation = (props) => {
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

  return (
    <Segment>
      <center>
        <h2>{name}</h2>
      </center>
      <p>
        <b>Provincia:</b> {province}
      </p>
      <p>
        <b>Informacion:</b> {information}
      </p>
      <p>
        <b>Correo Electrónico:</b> {email}
      </p>
      <p>
        <b>Publicidad:</b> {commercial}
      </p>
      <p>
        <b>Descripción:</b> {description}
      </p>
      <p>
        <b>Dirección:</b> {direction}
      </p>
      <p>
        <b>Categoría:</b> {category}
      </p>
      <p>
        <b>Dirección Web:</b> {website}
      </p>
      <p>
        <b>Teléfono:</b> {phone}
      </p>
    </Segment>
  );
};

export default ViewInformation;
