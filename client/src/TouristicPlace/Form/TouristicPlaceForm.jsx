import React from "react";
import { Button, Container, Form, Icon } from "semantic-ui-react";
import "./TouristicPlaceForm.css";
import useForm from "./useForm";
import validate from "./validate";

export default function TouristicPlaceForm() {
  const { handleSubmit, handleChange, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Aun nada");
  }

  return (
    <Container>
      <h1 className="ui header aligned center">Lugar turístico</h1>
      <p className="ui large form">
        Los campos marcados con <span style={{ color: "#db2828" }}>*</span> son
        obligatorios
      </p>
      <Form autoComplete="off" size="large" onSubmit={handleSubmit} noValidate>
        <Form.Input
          required
          error={errors.name !== undefined}
          type="text"
          label="Nombre"
          id="name"
          name="name"
          placeholder="Nombre del lugar turístico"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <Form.TextArea
          error={errors.description !== undefined}
          label="Descripción"
          id="description"
          name="description"
          rows="2"
          placeholder="Descripción del lugar turístico"
          value={values.description}
          onChange={handleChange}
          required
        />
        {errors.description && <p className="error">{errors.description}</p>}
        <Form.Group widths="equal">
          <Form.TextArea
            error={errors.address !== undefined}
            label="Dirección"
            id="address"
            name="address"
            rows="1"
            placeholder="Dirección del lugar turístico"
            value={values.address}
            onChange={handleChange}
            required
          />
          <Button icon>
            <Icon name="map marker alternate" />
          </Button>
        </Form.Group>
        {errors.address && <p className="error">{errors.address}</p>}
        <Form.TextArea
          error={errors.schedules !== undefined}
          label="Horarios"
          id="schedules"
          name="schedules"
          rows="3"
          placeholder="Horarios del lugar turístico"
          value={values.schedules}
          onChange={handleChange}
          required
        />
        {errors.schedules && <p className="error">{errors.schedules}</p>}
        <div>
          <Button floated="left" size="large" negative>
            Cancelar
          </Button>
          <Button type="submit" floated="right" size="large" positive>
            Aceptar
          </Button>
        </div>
      </Form>
    </Container>
  );
}
