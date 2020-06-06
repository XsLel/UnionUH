import React, { Component } from "react";
import "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import Item from "./item";
import Main from "../main";
import Paginador from "../listado/paginador/paginador";
class Mosaico extends Component {
  constructor() {
    super();
    this.state = { titulo: "" };
    this.state = { lugaresTuristicos: [] };
  }

  valueToState(target) {
    this.setState({ [target.name]: target.value });
  }

  componentDidMount() {
    this.setState({ titulo: "Mosaico" });
    fetch("/api/lugaresturistico")
      .then((res) => res.json())
      .then((lt) => this.setState({ lugaresTuristicos: Object.values(lt) }));
  }

  render() {
    return (
      <div>
        <Main titulo={this.state.titulo} />
        <div className="ui two column grid">
          {this.state.lugaresTuristicos &&
            this.state.lugaresTuristicos.map((it) => (
              <Item
                key={it.idlugarturistico}
                titulo={it.nombrelugarturistico}
                rank={it.promedio}
              />
            ))}
        </div>
        <div class="ui column centered grid">
          <Paginador />
        </div>
      </div>
    );
  }
}
export default Mosaico;
