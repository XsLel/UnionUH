import React, { useEffect, useState } from "react";
import "semantic-ui-react";
import { Segment, Grid, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Main from "../main";

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
    setTitulo("Listado");
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
      {console.log(count)}
      <Main titulo={titulo} />
      <Segment>
        <Grid columns={3} divided>
          {array.map((it) => (
            <Item
              key={it.idlugarturistico}
              titulo={it.nombrelugarturistico}
              rank={it.promedio}
              image={it.foto}
              link={it.link}
            />
          ))}
        </Grid>
      </Segment>
      <div class="ui column centered grid">
        <ul>
          {numbers.map((number) => (
            <li key={number}>
              <Button onClick={() => onChange(number)}>{number}</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Mosaico;
