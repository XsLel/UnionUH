import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";

function showUrl(list) {
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

export default function Carrusel(props) {
  const { carousel } = props;

  return (
    <Fragment>
      {props ? (
        <Segment>
          <center>
            <h1>CARRUSEL</h1>
            {showUrl(carousel)}
          </center>
        </Segment>
      ) : (
        <Segment loading></Segment>
      )}
    </Fragment>
  );
}
