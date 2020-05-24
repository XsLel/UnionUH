import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";

function showLink(list) {
  return (
    <div>
      {list.map((url, i) => (
        <p key={i}>
          <b>Url{i}:</b> {url}
        </p>
      ))}
    </div>
  );
}

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
    linkPhotos,
  } = props;

  return (
    <Fragment>
      {props ? (
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
          <h4>Fotos de los enlaces</h4>
          {showLink(linkPhotos)}
        </Segment>
      ) : (
        <Segment loading></Segment>
      )}
    </Fragment>
  );
};

export default ViewInformation;
