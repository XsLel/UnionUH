import React from "react";

const registerRestaurant = () => {
  return (
    <div class="container">
      <h4>REGISTRO DE RESTAURANTE</h4>
      <form class="ui form" method="" id="formulario">
        <div class="Field">
          <label>Nombre Restaurante*</label>
          <input
            type="text"
            size="6"
            maxlength="50"
            name="Nombre Restaurante"
            placeholder="Nombre Restaurante"
          ></input>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Dirección del Restaurante*</label>
              <input
                type="text"
                size="6"
                maxlength="50"
                name="Direccion del Restaurante"
                placeholder="Direccion del Restaurante"
              ></input>
            </div>
            <div class="field">
              <label>Provincia*</label>
              <select name="Provincia">
                <option>Arani</option>
                <option>Arque</option>
                <option>Ayopaya</option>
                <option>Bolivar</option>
                <option>Campero</option>
                <option>Capinota</option>
                <option>Cercado</option>
                <option>Chapare</option>
                <option>Esteban Arze</option>
                <option>German Jordan</option>
                <option>Jose Carrasco</option>
                <option>Mizque</option>
                <option>Punata</option>
                <option>Quillacollo</option>
                <option>Tapacari</option>
                <option>Tiraque</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Información adicional sobre la dirección</label>
              <input
                resize="none"
                maxlength="100"
                name="comentarios"
                rows="5"
                cols="10"
                placeholder="Escribe un comentario"
              ></input>
            </div>
            <div class="field">
              <label>Correo Electrónico</label>
              <input
                type="email"
                maxlength="50"
                name="email"
                placeholder="email"
              ></input>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Dirección de su sitio web</label>
              <input
                type="text"
                maxlength="100"
                name="Direccion Web"
                placeholder="Dirección sitio web"
              ></input>
            </div>
            <div class="field">
              <label>Teléfono *</label>
              <input
                type="number"
                maxlength="50"
                name="Telefono"
                placeholder="Teléfono"
              ></input>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>Dirección Página de Publicidad </label>
              <input
                type="text"
                maxlength="100"
                name="Dirreccion Publicidad"
                placeholder="Dirección Página de Publicidad"
              ></input>
            </div>
            <div class="field">
              <label>Categoría del restaurante*</label>
              <input
                type="text"
                name="Categoria"
                placeholder="Categoría"
              ></input>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>fotografía del logo del restaurante</label>
              <br></br>
              <input
                name="archivo"
                id="archivo"
                type="file"
                accept="image/*"
              ></input>
              <br></br>
              <br></br>
              <input type="submit" value="Registrar"></input>
            </div>
            <div class="field">
              <label>Descripción del Restaurante</label>
              <input
                type="text"
                maxlength="600"
                name="Descripcion"
                placeholder="Descripción del Restaurante"
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

//onsubmit="return validateForm()" ==>    usar con guardar acrhivos

//validar tamaño de la foto
//<input type="submit" value="Cargar" name="crear" ></input> USAR PARA BOTON GUARDAR
var form = document.getElementById("root");

form.addEventListener("submit", validar);

function validar(event) {
  var o = document.getElementById("archivo");
  var email = document.forms["formulario"]["email"].value;

  var foto = o.files[0];
  var c = 0;

  if (email === "") {
    alert("Llene el campo Email");
  } else {
    if (o.files.length === 0) {
      c = 1;
      alert(
        "Ingrese una imagen con alguno de los siguientes formatos: .jpeg/.jpg/.png/.bpm/ etc"
      );
    } else {
      var img = new Image();
      img.onload = function () {
        if (this.width.toFixed(0) != 144 && this.height.toFixed(0) != 144) {
          c = 1;
          alert("Las medidas deben ser: 144 x 144");
          //alert(c);
        } else {
          alert("Imagen correcta :)");
        }
      };

      img.src = URL.createObjectURL(foto);
    }
  }
  if (c === 1) event.preventDefault();
}

//function validarLetras(){
//return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//}

export default registerRestaurant;
