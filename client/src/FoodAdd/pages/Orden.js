import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orden = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/comidas");
    setUser(result.data.reverse());
    //console.log(result);
  };

  //const vec = [{name:"lucas"},{name:"pedro"}];

  const vector = [];
  const temp = [];

  for (let index = 0; index < users.length; index++) {
    let element = users[index].name;
    vector.push(element);
  }
  //metodo para ordenar los elementos de un array
  vector.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  //copiando elmentos de un array solo con el atribuoto name
  for (let index = 0; index < users.length; index++) {
    let element = vector[index];
    temp.push({ name: element });
  }

  return (
    <div>
      <br />
      <h2 align="center">MIS PUBLICACIONES</h2>
      <h4> </h4>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="ui simple dropdown item" id="listas">
        Lista
        <i className="dropdown icon"></i>
        <div className="menu">
          <Link
            className="ui teal button"
            id="btnOrdenar"
            to="/prueba/admiinistrador"
          >
            Ordenar Lista{" "}
          </Link>
          <br />
          <div className="ui simple dropdown item">
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;Lista Por
            Categoria
            <i className="dropdown icon"></i>
            <div className="menu">
              <Link
                className="ui teal button"
                id="btnOrdenar"
                to="/prueba/adminiistrador"
              >
                Comida
              </Link>
              <br />
              <Link
                className="ui teal button"
                id="btnOrdenar"
                to="/prueba/administrrador"
              >
                Bebida
              </Link>
              <br />
              <Link
                className="ui teal button"
                id="btnOrdenar"
                to="/prueba/administraador"
              >
                Postre
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="ui two column grid ">
        <div className="column">
          <table className="ui celled table">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>Nombres</th>
              </tr>
            </thead>
            <tbody>
              {temp.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <input
                    type="checkbox"
                    class="hidden"
                    readonly=""
                    tabindex="0"
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column">
          <br />
          <br />
          <br />
          <br />
          <Link
            className="ui inverted red button"
            id="botonesprincipales"
            to="/prueba/proximamente"
          >
            Modificar
          </Link>
          <br />
          <br />
          <Link
            className="ui yellow button"
            id="botonesprincipales"
            to="/prueba/proximamente"
          >
            Eliminar
          </Link>
          <br />
          <br />
          <Link
            className="ui inverted green button"
            id="botonesprincipales"
            to="/restaurants/Comida"
          >
            Resgistrar
          </Link>
          <br />
          <br />

          <Link
            className="ui violet button"
            id="botonesprincipales"
            to="/prueba/proximamente"
          >
            Buscar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orden;
