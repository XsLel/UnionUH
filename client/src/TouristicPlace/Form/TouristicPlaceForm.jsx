import React from "react";
import classNames from "classnames/bind";
import MessageBox from "../../components/MessageBox";
import useForm from "./useForm";
import validate from "./validate";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import { Form, Icon } from "semantic-ui-react";
import { http } from "../../services";
import globalStyles from "../../index.module.css";
import localStyles from "./TouristicPlaceForm.module.css";

const globalCx = classNames.bind(globalStyles);
const localCx = classNames.bind(localStyles);

export default function TouristicPlaceForm() {
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
  const { handleSubmit, handleChange, values, errors } = useForm(submit, validate);
  const { addToast } = useToasts();
  const history = useHistory();

  const errorClassNames = classNames(globalCx("text-red"), localCx("small"));

  async function submit() {
    try {
      await http.request({ url: "/touristic-places", method: "POST", data: values });
      addToast("Se ha registrado correctamente", { appearance: "success" });
      history.push("/lugares-turisticos");
    } catch (error) {
      let errorMessage;
      if (error.status === 400 && error.message === "Duplicate entry for 'name' field") {
        errorMessage = `El lugar turístico '${values.name}' ya existe`;
      } else {
        if (400 <= error.status <= 499) {
          console.error(error);
        }
        errorMessage =
          "Ha ocurrido un error en el servidor. Por favor, intenta más tarde.";
      }
      addToast(errorMessage, { appearance: "error" });
    }
  }

  return (
    <div className={globalCx("container", "mt-5")}>
      <h1 className={localCx("title")}>Lugar turístico</h1>
      <p className="ui large form">
        Los campos marcados con <span className={globalCx("text-red")}>*</span> son
        obligatorios
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
        {errors.name && <p className={errorClassNames}>{errors.name}</p>}
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
        {errors.description && <p className={errorClassNames}>{errors.description}</p>}
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
        {errors.address && <p className={errorClassNames}>{errors.address}</p>}
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
        {errors.schedules && <p className={errorClassNames}>{errors.schedules}</p>}
        <Form.Group widths="equal">
          <MessageBox
            centeredContent
            open={openConfirmationModal}
            trigger={
              <Form.Button
                fluid
                negative
                type="button"
                floated="left"
                size="large"
                onClick={(_e, _d) => setOpenConfirmationModal(true)}>
                Cancelar
              </Form.Button>
            }
            content="¿Estás seguro de cancelar el registro?"
            onCancel={() => setOpenConfirmationModal(false)}
            onOK={() => {
              setOpenConfirmationModal(false);
              history.push("/lugares-turisticos");
            }}
          />
          <Form.Button fluid positive type="submit" floated="right" size="large">
            Aceptar
          </Form.Button>
        </Form.Group>
      </Form>
    </div>
  );
}
