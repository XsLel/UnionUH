import React, { createRef, useCallback, useState } from "react";
import classNames from "classnames/bind";
import Map from "../../components/Map";
import MessageBox from "../../components/MessageBox";
import globalStyles from "../../index.module.css";
import localStyles from "./TouristicPlaceForm.module.css";
import useForm from "./useForm";
import validate from "./validate";
import { Client } from "@googlemaps/google-maps-services-js";
import { http } from "../../services";
import { Form, Icon, Modal } from "semantic-ui-react";
import { MAIN_SQUARE_COORDINATES } from "../../services/constants";
import { Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const globalCx = classNames.bind(globalStyles);
const localCx = classNames.bind(localStyles);

export default function TouristicPlaceForm() {
  const [areCoordinatesChanged, setAreCoordinatesChanged] = useState(false);
  const [center, setCenter] = useState(MAIN_SQUARE_COORDINATES);
  const [coordinates, setCoordinates] = useState(null);
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);
  const [isOpenMapModal, setIsOpenMapModal] = useState(false);
  const [places, setPlaces] = useState([]);
  const [placeValue, setPlaceValue] = useState("");
  const { handleSubmit, handleChange, values, errors } = useForm(submit, validate);
  const { addToast } = useToasts();
  const history = useHistory();
  const client = new Client({});
  const errorClassNames = classNames(globalCx("text-red"), localCx("small"));
  const refMap = createRef();
  const tempKey = "temp";

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

  function handleAddAddress({ value }) {
    if (places.length > 0 && places[0].key === tempKey) {
      setPlaces((prevPlaces) => {
        prevPlaces[0].text = value;
        return prevPlaces;
      });
    } else {
      setPlaces((prevPlaces) => [
        { key: tempKey, value: tempKey, text: value },
        ...prevPlaces,
      ]);
    }
    setPlaceValue(tempKey);
  }

  function handleChangeAddress({ target: { textContent } }, { name, value }) {
    if (!textContent) {
      textContent = value;
      value = tempKey;
    }
    setPlaceValue(value);
    handleChange({ target: { name, value: textContent } });
  }

  async function handleCloseMapModal() {
    setIsOpenMapModal(false);
    if (coordinates && areCoordinatesChanged) {
      const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
      try {
        const {
          data: { results },
        } = await client.reverseGeocode({
          params: {
            key: REACT_APP_GOOGLE_MAPS_API_KEY,
            language: "es-419",
            latlng: coordinates,
          },
        });
        const places = results.map(({ place_id, formatted_address }) => ({
          key: place_id,
          value: place_id,
          text: formatted_address,
        }));
        setPlaces(places);
        if (places.length > 0) {
          setPlaceValue(places[0].value);
        }
      } catch (error) {
        console.error(error);
      }
    }
    setAreCoordinatesChanged(false);
  }

  function putMarker({ latLng }) {
    setCoordinates({ lat: latLng.lat(), lng: latLng.lng() });
    setAreCoordinatesChanged(true);
    if (places.length > 0 && places[0].key === tempKey) {
      setPlaces((prevPlaces) => prevPlaces.slice(1));
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
          <Form.Dropdown
            allowAdditions
            fluid
            required
            search
            selection
            additionLabel="Agregar: "
            error={errors.address !== undefined}
            id="address"
            disabled={!coordinates}
            label="Dirección"
            name="address"
            noResultsMessage="No se encontraron direcciones cercanas"
            placeholder="Dirección del lugar turístico"
            value={placeValue}
            width="15"
            options={places}
            onAddItem={(_, data) => handleAddAddress(data)}
            onChange={handleChangeAddress}
          />
          <Modal
            closeOnDimmerClick
            closeOnEscape
            dimmer="inverted"
            open={isOpenMapModal}
            size="large"
            onClose={handleCloseMapModal}
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
