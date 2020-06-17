import React, { useEffect, useState } from "react";
import "semantic-ui-react";
import { Segment, Grid, Header, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Main from "../main";

const Listado = () => {
  const [titulo, setTitulo] = useState("");
  const [lugaresTuristicos, setLT] = useState([]);
  const [count, setCount] = useState(1);
  const [actual, setActual] = useState(1);

  useEffect(() => {
    const getLT = async () => {
      await fetch("/api/lugaresturistico")
        .then((res) => res.json())
        .then((lt) => setLT(Object.values(lt)));
    };

    const getCount = async () => {
      await fetch("/api/lugaresturistico/count/1")
        .then((res) => res.json())
        .then((val) => setCount(parseInt(val)));
    };
    setTitulo("Listado");
    getLT();
    getCount();
  }, []);

  const onChange = (number) => {
    setActual(number);
  };

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

  const indexLastPage = actual * 5;
  const indexFirstPage = indexLastPage - 5;
  const array = lugaresTuristicos.slice(indexFirstPage, indexLastPage);
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <Main titulo={titulo} />
      <Segment>
        <Grid columns={3} divided>
          {array.map((it) => (
            <Grid.Row key={it.idlugarturistico}>
              <Grid.Column>
                <a href={it.link} target="_blank">
                  <Image src={it.foto} size="medium" />
                </a>
              </Grid.Column>
              <Grid.Column>
                <Header as="h2">{it.nombrelugarturistico}</Header>
                <Header as="h3">Calificacion : {it.promedio}</Header>
              </Grid.Column>
              <Grid.Column>
                <select id={"lugar" + it.idlugarturistico}>
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
                    insert(
                      it.idlugarturistico,
                      document.getElementById("lugar" + it.idlugarturistico).value
                    )
                  }>
                  Calificar
                </Button>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Segment>
      <div class="ui column centered grid">
        <Grid columns={numbers.length}>
          <Grid.Row>
            {numbers.map((number) => (
              <Grid.Column>
                <Button onClick={() => onChange(number)}>{number}</Button>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};
export default Listado;
