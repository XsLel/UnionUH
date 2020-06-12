import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../style/AddCom.css";

const AddComidas = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    ingredients: "",
    days: "",
    servings: "",
  });
  const {
    name,
    price,
    description,
    category,
    ingredients,
    days,
    servings,
  } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    controlNombre();
    controlPrecio();
    controlDescripcion();
    controlIngredientes();
    controlCantidadPersonas();
  };

  const onClickChange = (e) => {
    botonGuardar();
  };

  function botonGuardar() {
    var campo = document.getElementById("idLabelCantidad");
    if (campo.style.color == "green") {
      campo = document.getElementById("idLabelNombre");
      if (campo.style.color == "green") {
        campo = document.getElementById("idLabelPrecio");
        if (campo.style.color == "green") {
          campo = document.getElementById("idLabelDescripcion");
          if (campo.style.color == "green") {
            campo = document.getElementById("idLabelIngredientes");
            if (campo.style.color == "green") {
              alert("muchas gracias por su registro");
            }
          }
        }
      }
    }
  }

  function controlCantidadPersonas() {
    var cantidadLabel = document.getElementById("idLabelCantidad");
    var cantidadInput = document.getElementById("idCantidad");
    var regexNumero = new RegExp("^[0-9]{1,3}");
    if (
      !regexNumero.test(cantidadInput.value) ||
      !(cantidadInput.value > 0 && cantidadInput.value <= 20)
    )
      cantidadLabel.style.color = "red";
    else cantidadLabel.style.color = "green";
  }

  function controlNombre() {
    var nombreLabel = document.getElementById("idLabelNombre");
    var nombreInput = document.getElementById("idNombre");
    var regexABC = new RegExp("^[a-zA-Zs ]{3,30}");
    if (!regexABC.test(nombreInput.value)) nombreLabel.style.color = "red";
    else nombreLabel.style.color = "green";
  }
  function controlPrecio() {
    var precioLabel = document.getElementById("idLabelPrecio");
    var precioInput = document.getElementById("idPrecio");
    var regexNumero = new RegExp("^[0-9]{1,3}");
    if (
      !regexNumero.test(precioInput.value) ||
      !(precioInput.value > 0 && precioInput.value <= 500)
    )
      precioLabel.style.color = "red";
    else precioLabel.style.color = "green";
  }
  function controlDescripcion() {
    var descripcionLabel = document.getElementById("idLabelDescripcion");
    var descripcionInput = document.getElementById("idDescripcion");
    var regexABC = new RegExp("[a-zA-Z0-9]");
    //&& nombreInput.value.length<4
    if (
      !regexABC.test(descripcionInput.value) ||
      !(descripcionInput.value.length > 9)
    )
      descripcionLabel.style.color = "red";
    else descripcionLabel.style.color = "green";
  }
  function controlIngredientes() {
    var ingredientesLabel = document.getElementById("idLabelIngredientes");
    var ingredientesInput = document.getElementById("idIngredientes");
    var regexABC = new RegExp("^[a-zA-Zs ]{1,500}");
    //^[a-zA-Zs ] regex solo letras y espacios
    //^[a-zA-Z0-9s]
    if (!regexABC.test(ingredientesInput.value))
      ingredientesLabel.style.color = "red";
    else ingredientesLabel.style.color = "green";
  }

  const handleInput = (e) => {
    let index = e.target.selectedIndex;
    console.log(e.target.options[index].text); // obtiene el texto de la opción seleccionada

    setUser({ ...user, [e.target.name]: e.target.options[index].text });
  };

  const yourConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "My.Jwt.Secret.Key.0ca5d050-6595-11ea-bc55-0242ac130003",
    },
  };

  const onSubmit = async (e) => {
    axios
      .post("http://localhost:8585/restaurants/Food/save", user, yourConfig)
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
        console.log(erro.response);
      });
    history.push("/");
  };

  return (
    <div className="cont">
      <div className="w-75 mx-auto shadow p-5">
        <h3></h3>
        <h2 className="ui header" align="center">
          Registro de Comida
        </h2>
        <h5 className="ui header">Los campos con * son obligatorios</h5>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="ui input">
            <label id="idLabelNombre">Nombre* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="idNombre"
              type="text"
              class="ui input"
              className="cajaNombre"
              placeholder="ingrese nombre de comida"
              autocomplete="off"
              name="name"
              value={name}
              onkeyup="onKeyUp(event)"
              minlength="3"
              maxlength="30"
              pattern="^[a-zA-Zs ]{3,30}"
              required
              formnovalidate="true"
              onChange={(e) => onInputChange(e)}
              onClick={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <br />
          <div className="ui input">
            <label id="idLabelPrecio">Precio BS* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="idPrecio"
              type="number"
              className="cajaPrecio"
              placeholder="Precio de la Comida"
              name="price"
              value={price}
              max="500"
              min="1"
              required
              onClick={(e) => onInputChange(e)}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <br />
          <div className="ui input">
            <label id="idLabelDescripcion">Descripcion* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="idDescripcion"
              autocomplete="off"
              type="text"
              className="cajaDescripcion"
              placeholder="Ingrese descripcion de la comida"
              name="description"
              value={description}
              maxlength="2000"
              minLength="10"
              pattern="[A-Za-z0-9].*"
              required
              onClick={(e) => onInputChange(e)}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <br />
          <div className="ui input">
            <label>Categoria* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select
              className="ui dropdown"
              id="cajaCategoria"
              name="category"
              value={category}
              onChange={(e) => handleInput(e)}
              required
            >
              <option value="">seleccione una opción</option>
              <option> Comida</option>
              <option>Bebida</option>
              <option>Postre</option>
            </select>
          </div>
          <br />
          <br />
          <div className="ui input">
            <label id="idLabelIngredientes">Ingredientes *</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="idIngredientes"
              autocomplete="off"
              type="text"
              className="cajaIngredientes"
              placeholder="Ingredientes de la Comida"
              name="ingredients"
              value={ingredients}
              maxLength="500"
              minLength="0"
              pattern="^[a-zA-Zs ]{1,500}"
              required
              onChange={(e) => onInputChange(e)}
              onClick={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <br />
          <div className="ui input">
            <label>Dias Disponibles</label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select
              name="skills"
              multiple=""
              class="ui fluid check"
              size="7"
              id="cajaDias"
              placeholder="Dias Disponibles"
              name="days"
              required
              onChange={(e) => handleInput(e)}
              class="ui fluid search dropdown"
              multiple="multiple"
            >
              <option value="" selected>
                seleccione una opción
              </option>
              <option value="lunes">Lunes</option>
              <option value="martes">Martes</option>
              <option value="Miercoles">Miercoles</option>
              <option value="jueves">Jueves</option>
              <option value="viernes">Viernes</option>
              <option value="sabado">Sabado</option>
              <option value="domingo">Domingo</option>
            </select>
            <h6>presione ctrl para selecionar</h6>
            <h6>mas opciones</h6>
          </div>
          <br />
          <br />
          <div className="ui input">
            <label id="idLabelCantidad">Cantidad* </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              id="idCantidad"
              type="number"
              className="cajaCant"
              placeholder="Ingrese Cantidad de Porciones"
              name="servings"
              value={servings}
              max="20"
              min="1"
              required
              onChange={(e) => onInputChange(e)}
              onClick={(e) => onInputChange(e)}
            />
          </div>
          <br />
          <br />
          <form
            encType="multipart/form-data"
            action="uploader.php"
            method="POST"
          >
            <input name="uploadedfile" type="file" />
          </form>
          <br />
          <br />
          <button className="ui second button">Cancelar </button>
          &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={(e) => onClickChange(e)}
            className="ui primary button"
            type="submit"
            id="botonGuardar"
          >
            Guardar{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddComidas;
