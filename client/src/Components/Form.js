import React from "react";
import CenteredLayout from "../common/centeredLayout";
import {
  Button,
  Form,
  Select,
  Input,
  TextArea,
  Image,
  SearchCategory,
} from "semantic-ui-react";
import UseForm from "./Validations/useForm";
import validate from "./Validations/validateForm";
import Message from "./Validations/Message";
import { http } from "../services";
import "./Validations/index.css";
import { useHistory } from "react-router-dom";
import ImagePreview from "./Validations/ImagePreview";

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

  const fileChangedHandler = (e) => {
    console.log(e);
  };

  const history = useHistory();

  async function submit() {
    try {
      await http.request({
        url: "/restaurantRegistration/save",
        method: "POST",
        data: values,
      });
      console.log("Submitted Succesfully");
      history.push("/lugares-turisticos");
    } catch (error) {
      console.log(error);
    }
    console.log("Submitted Succesfully");
  }
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(
    false
  );

  return (
    <div className="container mt-5">
      <br></br>
      <h1 className="ui header aligned center">REGISTRO DEL RESTAURANTE</h1>
      <br></br>
      <br></br>
      <CenteredLayout>
        <Form
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          size="large"
        >
          <Form.Field
            required
            control={Input}
            label="Nombre del Restaurante"
            type="text"
            name="nameRestaurant"
            maxLength="50"
            placeholder="Nombre del Restaurante"
            value={values.nameRestaurant}
            onChange={handleChange}
            style={{ width: 595 }}
          />
          {errors.nameRestaurant && (
            <p className="error">{errors.nameRestaurant}</p>
          )}
          <Form.Group widths="equal">
            <Form.Field
              required
              control={Input}
              label="Dirección del Restaurante"
              type="text"
              name="restaurantAddress"
              maxLength="50"
              placeholder="Dirección del Restaurante"
              value={values.restaurantAddress}
              onChange={handleChange}
            />
            <Form.Field
              required
              control={Select}
              options={genderOptions}
              label={{
                children: "Provincia",
                htmlFor: "form-select-control-gender",
              }}
              name="province"
              placeholder="seleccione una provincia"
              value={values.province}
              onChange={(e, { value, name }) =>
                handleChange({ target: { value, name } })
              }
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              {errors.restaurantAddress && (
                <p className="error">{errors.restaurantAddress}</p>
              )}
            </Form.Field>
            <Form.Field>
              {errors.province && <p className="error">{errors.province}</p>}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={TextArea}
              label="Información adicional del restaurante"
              type="text"
              name="additionalInformation"
              maxLength="100"
              placeholder="Cuéntanos más.."
              value={values.additionalInformation}
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
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field></Form.Field>
            <Form.Field>
              {errors.email && <p className="error">{errors.email}</p>}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Dirección de su sitio web"
              name="webAddress"
              maxLength="100"
              placeholder="Dirección de su sitio web"
              value={values.webAddress}
              onChange={handleChange}
            />
            {errors.webAddress && <p className="error">{errors.webAddress}</p>}
            <Form.Field
              control={Input}
              label="Teléfono"
              type="tel"
              name="phone"
              maxLength="7"
              placeholder="Teléfono"
              value={values.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field></Form.Field>
            <Form.Field>
              {errors.phone && <p className="error">{errors.phone}</p>}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Dirección página de publicidad"
              name="advertising"
              maxLength="100"
              placeholder="Dirección página de publicidad"
              value={values.advertising}
              onChange={handleChange}
            />
            {errors.advertising && (
              <p className="error">{errors.advertising}</p>
            )}
            <Form.Field
              required
              control={Select}
              options={genderOptionsCategoria}
              label={{
                children: "categoria",
                htmlFor: "form-select-control-gender",
              }}
              name="category"
              placeholder="seleccione una categoria"
              value={values.category}
              onChange={(e, { value, name }) =>
                handleChange({ target: { value, name } })
              }
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field></Form.Field>
            <Form.Field>
              {errors.category && <p className="error">{errors.category}</p>}
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <label>Fotografía del logo del Restaurante</label>
              <ImagePreview
                fileChangedHandler={fileChangedHandler}
              ></ImagePreview>
            </Form.Field>

            <Form.Field
              control={TextArea}
              label="Descripción del Restaurante"
              name="description"
              type="text"
              maxLength="600"
              placeholder="Descripción del Restaurante"
              value={values.description}
              onChange={handleChange}
              style={{ resize: "none" }}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </Form.Group>

          <Form.Group widths="equal">
            <Message
              centeredContent
              open={openConfirmationModal}
              trigger={
                <Form.Button
                  fluid
                  negative
                  floated="left"
                  size="large"
                  style={{ width: 150 }}
                  onClick={(_e, _d) => setOpenConfirmationModal(true)}
                >
                  Cancelar
                </Form.Button>
              }
              content="¿Estás seguro de cancelar el registro?"
              onCancel={() => setOpenConfirmationModal(false)}
              onOK={() => {
                setOpenConfirmationModal(false);
                history.push("/");
              }}
            />

            <Form.Button
              control={Button}
              floated="left"
              positive
              size="large"
              style={{ width: 150 }}
              type="submit"
            >
              Guardar
            </Form.Button>
          </Form.Group>
        </Form>
      </CenteredLayout>
    </div>
  );
};

export default RegisterRestaurant;
