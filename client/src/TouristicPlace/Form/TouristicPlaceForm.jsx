import React from "react";
import { Button, Container, Form, Icon } from "semantic-ui-react";
import "./TouristicPlaceForm.css";

export default function TouristicPlaceForm() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [schedules, setSchedules] = React.useState("");

  return (
    <Container>
      <h1 className="ui header aligned center">Lugar turístico</h1>
      <p className="ui large form">
        Los campos marcados con <span style={{ color: "#db2828" }}>*</span> son
        obligatorios
      </p>
      <Form autoComplete="off" size="large">
        <Form.Input
          type="text"
          label="Nombre"
          id="name"
          placeholder="Nombre del lugar turístico"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form.TextArea
          label="Descripción"
          id="description"
          rows="2"
          placeholder="Descripción del lugar turístico"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Form.Group widths="equal">
          <Form.TextArea
            label="Dirección"
            id="address"
            rows="1"
            placeholder="Dirección del lugar turístico"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <Button icon>
            <Icon name="map marker alternate" />
          </Button>
        </Form.Group>
        <Form.TextArea
          label="Horarios"
          id="schedules"
          rows="3"
          placeholder="Horarios del lugar turístico"
          value={schedules}
          onChange={(e) => setSchedules(e.target.value)}
          required
        />
        <div>
          <Button floated="left" size="large" negative>
            Cancelar
          </Button>
          <Button
            type="submit"
            floated="right"
            size="large"
            positive>
            Aceptar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
