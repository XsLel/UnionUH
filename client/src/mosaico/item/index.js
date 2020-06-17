import React from "react";
import "semantic-ui-react";
import { Header, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
function Item(props) {
  const insert = async (id, sc) => {
    try {
      const res = await fetch("/api/calificacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idlugarturistico: id,
          score: sc,
        }),
      });
      return res;
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="column">
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <a href={props.link} target="_blank">
              <Image src={props.image} size="medium" />
            </a>
          </div>
          <div className="column">
            <Header as="h2">{props.titulo}</Header>
            <Header as="h3">Calificacion : {props.rank}</Header>
            <select id={"lugar" + props.idLT}>
              <option value="0" disabled>
                Seleccione un Puntaje..
              </option>
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <Button
              secondary
              onClick={() =>
                insert(props.idLT, document.getElementById("lugar" + props.idLT).value)
              }>
              Calificar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
