import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Icon, Modal, Button } from "semantic-ui-react";
import useForm from "./useForm";
import validate from "./validate";
import "./TouristicPlaceForm.css";

export default function TouristicPlaceForm() {
  const { handleSubmit, handleChange, values, errors } = useForm(submit, validate);
  const [openModal, setOpenModal] = React.useState(false);
  const history = useHistory();

  function submit() {
    console.log("Aun nada");
  }

  return (
    <div className="container mt-5">
      <h1 className="ui header aligned center">Lugar turístico</h1>
      <p className="ui large form">
        Los campos marcados con <span className="text-red">*</span> son obligatorios
      </p>
      <Form noValidate autoComplete="off" size="large" onSubmit={handleSubmit}>
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
        {errors.name && <p className="text-red small">{errors.name}</p>}
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
        {errors.description && <p className="text-red small">{errors.description}</p>}
        <Form.Group>
          <Form.TextArea
            error={errors.address !== undefined}
            label="Dirección"
            id="address"
            name="address"
            rows="1"
            placeholder="Dirección del lugar turístico"
            width="15"
            value={values.address}
            onChange={handleChange}
            required
          />
          <Form.Button icon disabled>
            <Icon name="map marker alternate" />
          </Form.Button>
        </Form.Group>
        {errors.address && <p className="text-red small">{errors.address}</p>}
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
        {errors.schedules && <p className="text-red small">{errors.schedules}</p>}
        <Form.Group widths="equal">
          <Modal
            size="mini"
            dimmer="inverted"
            open={openModal}
            trigger={
              <Form.Button
                fluid
                negative
                floated="left"
                size="large"
                onClick={(_e, _d) => setOpenModal(true)}>
                Cancelar
              </Form.Button>
            }>
            <Modal.Content>
              <p className="text-align-center">¿Estás seguro de cancelar el registro?</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                negative
                content="Cancelar"
                onClick={(_e, _d) => setOpenModal(false)}
              />
              <Button
                positive
                content="Aceptar"
                onClick={(_e, _d) => history.push("/lugares-turisticos")}
              />
            </Modal.Actions>
          </Modal>
          <Form.Button
            fluid
            positive
            type="submit"
            floated="right"
            size="large">
            Aceptar
          </Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
}
