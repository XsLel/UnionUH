import React, { useEffect, useState } from "react";
import "semantic-ui-react";
import { Segment, Grid, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Main from "../main";
import Item from "./item";

const Mosaico = () => {
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
      await fetch("/api/lugaresturistico/count/2")
        .then((res) => res.json())
        .then((val) => setCount(parseInt(val)));
    };
    setTitulo("Mosaico");
    getLT();
    getCount();
  }, []);

  const onChange = (number) => {
    setActual(number);
  };
  const indexLastPage = actual * 6;
  const indexFirstPage = indexLastPage - 6;
  const array = lugaresTuristicos.slice(indexFirstPage, indexLastPage);
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }
  return (
    <div>
      <Main titulo={titulo} />
      <Segment>
        <Grid columns={2} divided>
          {array.map((it) => (
            <Item
              key={it.idlugarturistico}
              titulo={it.nombrelugarturistico}
              rank={it.promedio}
              image={it.foto}
              link={it.link}
              idLT={it.idlugarturistico}
            />
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
export default Mosaico;