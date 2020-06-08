import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Administrador = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost:8585/restaurants/Food/allFoods"
    );
    setUser(result.data.reverse());
    //console.log(result);
  };
  return (
    <div>
      <br />
      <h2 align="center">MIS PUBLICACIONES</h2>
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
              <tr>
                <th>
                  <div></div>
                </th>
                <th>Recordatorio: abajo aparece listas de comidas</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="column" id="botonesprincipales">
          <br />
          <br />
          <br />
          <br />
          <Link className="ui button">Modificar</Link>
          <br />
          <br />
          <Link className="ui button">Eliminar</Link>
          <br />
          <br />
          <Link className="ui button" to="/restaurants/Comida">
            Resgistrar
          </Link>
          <br />
          <br />

          <Link className="ui button">Buscar</Link>
        </div>
      </div>
    </div>
  );
};

export default Administrador;
