import React, { createRef, useCallback, useState } from "react";
import classNames from "classnames/bind";
import Map from "../../components/Map";
import MessageBox from "../../components/MessageBox";
import globalStyles from "../../index.module.css";
import localStyles from "./TouristicPlaceForm.module.css";
import useForm from "./useForm";
import validate from "./validate";
import { http } from "../../services";
import { Form, Icon, Modal } from "semantic-ui-react";
import { MAIN_SQUARE_COORDINATES } from "../../services/constants";
import { Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const globalCx = classNames.bind(globalStyles);
const localCx = classNames.bind(localStyles);

export default function TouristicPlaceForm() {
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);
  const [isOpenMapModal, setIsOpenMapModal] = useState(false);
  const [center, setCenter] = useState(MAIN_SQUARE_COORDINATES);
  const [coordinates, setCoordinates] = useState(null);
  const { handleSubmit, handleChange, values, errors } = useForm(submit, validate);
  const { addToast } = useToasts();
  const history = useHistory();
  const refMap = createRef();

  const errorClassNames = classNames(globalCx("text-red"), localCx("small"));

  async function submit() {
    try {
      await http.request({
        url: "/touristic-places",
        method: "POST",
        data: { ...values, ...coordinates },
      });
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

  function handleCenterChanged() {
    if (refMap.current) {
      const { center } = refMap.current.state.map;
      setCenter({ lat: center.lat(), lng: center.lng() });
    }
  }

  function putMarker({ latLng }) {
    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
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
          <Modal
            closeOnDimmerClick
            closeOnEscape
            dimmer="inverted"
            open={isOpenMapModal}
            size="large"
            onClose={() => setIsOpenMapModal(false)}
            trigger={
              <Form.Button icon type="button" onClick={() => setIsOpenMapModal(true)}>
                <Icon name="map marker alternate" />
              </Form.Button>
            }>
            <Modal.Header>Dirección</Modal.Header>
            <Modal.Content>
              <Map
                center={center}
                height="720px"
                ref={refMap}
                zoom={14}
                onCenterChanged={useCallback(handleCenterChanged)}
                onClick={putMarker}>
                {coordinates && (
                  <Marker draggable position={coordinates} onDragEnd={putMarker} />
                )}
              </Map>
            </Modal.Content>
          </Modal>
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
            open={isOpenConfirmationModal}
            trigger={
              <Form.Button
                fluid
                negative
                type="button"
                floated="left"
                size="large"
                onClick={() => setIsOpenConfirmationModal(true)}>
                Cancelar
              </Form.Button>
            }
            content="¿Estás seguro de cancelar el registro?"
            onCancel={() => setIsOpenConfirmationModal(false)}
            onOK={() => {
              setIsOpenConfirmationModal(false);
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
