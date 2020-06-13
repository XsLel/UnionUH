import React, { Component } from "react";
import "semantic-ui-react";
import { Segment, Grid, Header, Dropdown, Image, Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Main from "../main";
import Paginador from "./paginador/paginador";

class Listado extends Component {
  constructor() {
    super();
    this.state = { titulo: "" };
    this.state = { lugaresTuristicos: [] };
    this.state = { califique: 0 };
  }

  valueToState(target) {
    this.setState({ [target.text]: target.value });
  }

  insert(id) {
    return fetch("http://localhost:8585/api/calificacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        IDLugarTuristico: id,
        entrada_identrada: 1,
        Calificación: this.state.califique,
      }),
    })
      .then((res) => res)
      .catch((err) => err);
  }

  componentDidMount() {
    this.setState({ titulo: "Listado" });
    fetch("/api/lugaresturistico", { method: "GET", mode: "no-cors" })
      .then((res) => res.json())
      .then((lt) => this.setState({ lugaresTuristicos: Object.values(lt) }));
  }

  render() {
    let aux =
      "https://cdnmundo1.img.sputniknews.com/img/105158/14/1051581400_0:14:1024:567_1000x541_80_0_0_9889cd17d85392f6389fc106af600b9b.jpg";
    return (
      <div>
        <Main titulo={this.state.titulo} />
        <Segment>
          <Grid columns={3} divided>
            {this.state.lugaresTuristicos &&
              this.state.lugaresTuristicos.map((it) => (
                <Grid.Row key={it.idlugarturistico}>
                  <Grid.Column>
                    <Image src={aux} size="medium" />
                  </Grid.Column>
                  <Grid.Column>
                    <Header as="h2">{it.nombrelugarturistico}</Header>
                    <Header as="h3">Calificacion : {it.promedio}</Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown>
                      <Dropdown.Menu>
                        <Dropdown.Item text="1" />
                        <Dropdown.Item text="2" />
                        <Dropdown.Item text="3" />
                        <Dropdown.Item text="4" />
                        <Dropdown.Item text="5" />
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button
                      secondary
                      onClick={() =>
                        this.insert(
                          it.idlugarturistico,
                          parseInt(document.getElementById("calificar").value)
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
          <Paginador />
        </div>
      </div>
    );
  }
}
export default Listado;
