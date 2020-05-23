import React from "react";
import { Button } from "semantic-ui-react";

const registerRestaurant = () => {
  return (
    <div class="container">
      <h4>Formulario de Registro de Restaurante</h4>
      <p>hola mundo</p>

      <form action="" method="POST" id="formulario">
        <input name="archivo" id="archivo" type="file" accept="image/*"></input>
      </form>
    </div>
  );
};

//validar tamaño de la foto
//<input type="submit" value="Cargar" name="crear" ></input> USAR PARA BOTON GUARDAR
var form = document.getElementById("root");

form.addEventListener("submit", validar);

function validar(event) {
  var o = document.getElementById("archivo");
  var foto = o.files[0];
  var c = 0;

  if (
    o.files.length == 0 ||
    !Image.png ||
    !Image.jpeg ||
    !Image.jpg ||
    !Image.png ||
    !Image.xbm ||
    !Image.tif ||
    !Image.pjp ||
    !Image.pjpeg ||
    !Image.jfif ||
    !Image.webp ||
    !Image.ico ||
    !Image.tiff ||
    !Image.bmp ||
    !Image.svgz ||
    !Image.gif ||
    !Image.svg
  ) {
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
        alert(c);
      } else {
        alert("Imagen correcta :)");
      }
    };

    img.src = URL.createObjectURL(foto);
  }
  if (c == 1) event.preventDefault();
}

export default registerRestaurant;
