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
import Message from "./Validations/Message";
import { http } from "../services";
import "./Validations/index.css";
import { useHistory } from "react-router-dom";
import ImagePreview from "./Validations/ImagePreview"


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

const ModifyRestaurant = () => {
  const { handleChange, handleSubmit, values, errors } = UseForm(
    submit,
    validate
  );
 
  const fileChangedHandler=(e)=>{console.log(e)}

  const history = useHistory();

  
  async function submit() {
    try {
      await http.request({ url: "/touristic-places", method: "POST", data: values });
      console.log("Submitted Succesfully");
      history.push("/lugares-turisticos");
    } catch (error) {
      console.log(error);
    }
    console.log("Submitted Succesfully");
  }
  const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
  
  
  return (
    <div className="container mt-5">
      <br>
      </br>
      <h1 className="ui header aligned center">Modificar Restaurante</h1>
      <br>
      </br>
      <br>
      </br>
   <CenteredLayout>   
      <Form onSubmit={handleSubmit} noValidate autoComplete="off" size="large">
        <Form.Field
        required
          control={Input}
          label="Nombre del Restaurante"
          type="text"
          name="nombreRestaurante"
          maxLength="50"
          placeholder="Nombre del Restaurante"
          value={values.nombreRestaurante}
          onChange={handleChange}
          style={{ width: 595 }}
        />
        {errors.nombreRestaurante && <p className="error">{errors.nombreRestaurante}</p>}
        <Form.Group widths="equal">
          <Form.Field
          required
            control={Input}
            label="Dirección del Restaurante"
            type="text"
            name="direccionRestaurante"
            maxLength="50"
            placeholder="Dirección del Restaurante"
            value={values.direccionRestaurante}
            onChange={handleChange}
          />
          <Form.Field
          required
            control={Select}
            options ={genderOptions}
            label={{
              children: "Provincia",
              htmlFor: "form-select-control-gender",
            }}
            name="provincia"
            placeholder="seleccione una provincia"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field >{errors.direccionRestaurante && <p className="error">{errors.direccionRestaurante}</p>}</Form.Field>
          <Form.Field>{errors.provincia && <p className="error">{errors.provincia}</p>}</Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field
            control={TextArea}
            label="Información adicional del restaurante"
            type="text"
            name="informacionAdicional"
            maxLength="100"
            placeholder="Cuéntanos más.."
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
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field ></Form.Field>
          <Form.Field>{errors.email && <p className="error">{errors.email}</p>}</Form.Field>
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
          />{errors.direccionWeb && <p className="error">{errors.direccionWeb}</p>}
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
          
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field ></Form.Field>
          <Form.Field>{errors.telefono && <p className="error">{errors.telefono}</p>}</Form.Field>
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
          />{errors.publicidad && <p className="error">{errors.publicidad}</p>}
          <Form.Field
          required
            control={Select}
            options={genderOptionsCategoria}
            label={{
              children: "Categoria",
              htmlFor: "form-select-control-gender",
            }}
            name="categoria"
            placeholder="seleccione una categoria"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field ></Form.Field>
          <Form.Field>{errors.categoria && <p className="error">{errors.categoria}</p>}</Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <label>Fotografía del logo del Restaurante</label>
            <ImagePreview fileChangedHandler={fileChangedHandler}></ImagePreview>
            
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
          />{errors.descripción && <p className="error">{errors.descripción}</p>}
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
                style={{ width:150 }}
                onClick={(_e, _d) => setOpenConfirmationModal(true)}>
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
            
          <Form.Button control={Button} 
          floated="left"
          positive 
          size="large"
          style={{ width:150 }}
          type="submit">
            Guardar
          </Form.Button>
        </Form.Group>
      </Form>
    </CenteredLayout>
    </div>
  );
};

export default ModifyRestaurant;
