import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PaginaProximamente = () => {
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
      <h2 align="center">Página proximamente disponible</h2>

      <div className="column">
        <br />
        <br />
        <br />
        <br />
        <Link
          className="ui blue button"
          id="botonesprincipales"
          to="/prueba/administrador"
        >
          Volver
        </Link>
      </div>
    </div>
  );
};

export default PaginaProximamente;
