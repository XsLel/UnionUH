import React, { useState } from "react";
import CenteredLayout from "../common/centeredLayout";
import {
  Button,
  Form,
  Select,
  Input,
  TextArea,
  Image,
} from "semantic-ui-react";
import useForm from "./Validations/useForm";

import validate from "./Validations/validateForm";
import "./index.css";

const genderOptions = [
  { key: "m", text: "male", value: "male" },
  { key: "j", text: "female", value: "female" },
  { key: "k", text: "kale", value: "kale" },
  { key: "o", text: "other", value: "other" },
];

const registerRestaurant = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Succesfully");
  }
  return (
    <CenteredLayout>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Field
          control={Input}
          label="Nombre del Restaurante"
          name="nombreRestaurante"
          maxLength="50"
          placeholder="Nombre del Restaurante"
          value={values.nombreRestaurante}
          onChange={handleChange}
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección del Restaurante"
            name="direccionRestaurante"
            maxLength="50"
            placeholder="DirecciÓn del Restaurante"
            value={values.direccionRestaurante}
            onChange={handleChange}
          />
          <Form.Field
            control={Select}
            options={genderOptions}
            label={{
              children: "Provincia",
              htmlFor: "form-select-control-gender",
            }}
            name="provincia"
            placeholder="Provincia"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={TextArea}
            label="Información adicional del restaurante"
            name="informacionAdicional"
            maxLength="50"
            placeholder="Tell us more about you..."
            value={values.informacionAdicional}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label="Correo Electrónico"
            name="email"
            type="email"
            maxLength="50"
            placeholder="Correo Electrónico"
            value={values.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección de su sitio web"
            name="direccionWeb"
            maxLength="50"
            placeholder="Dirección de su sitio web"
            value={values.direccionWeb}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label="Teléfono"
            name="telefono"
            maxLength="50"
            placeholder="Teléfono"
            value={values.telefono}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección página de publicidad"
            name="publicidad"
            maxLength="50"
            placeholder="Dirección página de publicidad"
            value={values.publicidad}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label="Categoría del Restaurante"
            name="categoria"
            maxLength="50"
            placeholder="Categoría del Restaurante"
            value={values.categoria}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Fotografía del logo del Restaurante"</label>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="small"
              circular
            />
          </Form.Field>
          <Form.Field
            control={TextArea}
            label="Descripción del Restaurante"
            name="descripción"
            maxLength="50"
            placeholder="Descripción del Restaurante"
            value={values.descripción}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field control={Button}>Cancelar</Form.Field>
          <Form.Field control={submit}>Guardar</Form.Field>
        </Form.Group>
      </Form>
    </CenteredLayout>
  );
};

export default registerRestaurant;
