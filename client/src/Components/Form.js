import React from "react";
import CenteredLayout from "../common/centeredLayout";
import {
  Button,
  Form,
  Select,
  Input,
  TextArea,
  Image,
} from "semantic-ui-react";
import UseForm from "./Validations/useForm";
import validate from "./Validations/validateForm";


const genderOptions = [
  { key: "a", text: "Araní", value: "Arani" },
  { key: "a", text: "Arque", value: "Arque" },
  { key: "a", text: "Ayopaya", value: "Ayopaya" },
  { key: "b", text: "Bolívar", value: "Bolívar" },
  { key: "c", text: "Campero", value: "Campero" },
  { key: "c", text: "Carrasco", value: "Carrasco" },
  { key: "c", text: "Capinota", value: "Capinota" },
  { key: "c", text: "Cercado", value: "Cercado" },
  { key: "c", text: "Chapare", value: "Chapare" },
  { key: "E", text: "Esteban Arze", value: "Esteban Arze" },
  { key: "g", text: "Germán Jordán", value: "Germán Jordán" },
  { key: "m", text: "Misque", value: "Misque" },
  { key: "p", text: "Punata", value: "Punata" },
  { key: "q", text: "Quillacollo", value: "Quillacollo" },
  { key: "t", text: "Tapacari", value: "Tapacari" },
  { key: "t", text: "Tiraque", value: "Tiraque" },
];
const genderOptionsCategoria = [
  { key: "a", text: "gourmet", value: "gourmet" },
  { key: "a", text: "familiar", value: "familiar" },
  { key: "a", text: "buffet", value: "buffet" },
  { key: "b", text: "comida rapida", value: "comida rapida" },
  { key: "c", text: "tematico", value: "tematico" },
  { key: "c", text: "para llevar", value: "para llevar" },
];

const RegisterRestaurant = () => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    validate
  );

  function submit() {
    console.log("Submitted Succesfully");
  }
  return (
    <CenteredLayout>
      <label>REGISTER RESTAURANT</label>
      <Form onSubmit={handleSubmit} noValidate>
        <Form.Field
          control={Input}
          label="Nombre del Restaurante*"
          type="text"
          name="nombreRestaurante"
          maxLength="50"
          placeholder="Nombre del Restaurante"
          value={values.nombreRestaurante}
          onChange={handleChange}
          style={{ width: 595 }}
        />
        {errors.nombreRestaurante && (
          <p className="error">{errors.nombreRestaurante}</p>
        )}
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección del Restaurante*"
            type="text"
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
              children: "Provincia*",
              htmlFor: "form-select-control-gender",
            }}
            name="provincia"
            placeholder="seleccione una provincia"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={TextArea}
            label="Información adicional del restaurante"
            type="text"
            name="informacionAdicional"
            maxLength="100"
            placeholder="Tell us more about you..."
            value={values.informacionAdicional}
            onChange={handleChange}
            style={{ resize: "none" }}
          />
          <Form.Field
            control={Input}
            label="Correo Electrónico"
            type="email"
            name="email"
            maxLength="50"
            placeholder="Correo Electrónico"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección de su sitio web"
            name="direccionWeb"
            maxLength="100"
            placeholder="Dirección de su sitio web"
            value={values.direccionWeb}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            label="Teléfono"
            type="number"
            name="telefono"
            maxLength="30"
            placeholder="Teléfono"
            value={values.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <p className="error">{errors.telefono}</p>}
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Dirección página de publicidad"
            name="publicidad"
            maxLength="100"
            placeholder="Dirección página de publicidad"
            value={values.publicidad}
            onChange={handleChange}
          />
          <Form.Field
            control={Select}
            options={genderOptionsCategoria}
            label={{
              children: "Categoria*",
              htmlFor: "form-select-control-gender",
            }}
            name="categoria"
            placeholder="seleccione una categoria"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Fotografía del logo del Restaurante"</label>
            <Image
              src="https://react.semantic-ui.com/images/wireframe/square-image.png"
              size="small"
              circular
              name="fotoRestaurante"
            />
          </Form.Field>

          <Form.Field
            control={TextArea}
            label="Descripción del Restaurante"
            name="descripción"
            type="text"
            maxLength="600"
            placeholder="Descripción del Restaurante"
            value={values.descripción}
            onChange={handleChange}
            style={{ resize: "none" }}
          />
        </Form.Group>
        <Form.Input type="file" style={{ width: 160 }}></Form.Input>
        <Form.Group widths="equal">
          <Form.Field control={Button} type="">
            Cancelar
          </Form.Field>
          <Form.Field control={Button} type="submit">
            Guardar
          </Form.Field>
        </Form.Group>
      </Form>
    </CenteredLayout>
  );
};

export default RegisterRestaurant;
