import React from "react";


const registerRestaurant = () => {
  return (
    <div class="container">
      <h4>Formulario de Registro de Restaurante</h4>
      <p>hola mundo</p>
       
      <form class="ui form"method="" id="formulario" >

         <label>Correo Electronico:<input type="email" name="email" placeholder="Email"  /></label>

        

        <br></br>
        <br></br>
        <input name="archivo" id="archivo" type="file" accept="image/*"></input>
        <br></br>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

//onsubmit="return validateForm()" ==>    usar con guardar acrhivos

//validar tamaño de la foto
//<input type="submit" value="Cargar" name="crear" ></input> USAR PARA BOTON GUARDAR
var form = document.getElementById("root");

form.addEventListener("submit", validar );

function validar(event) {
  var o = document.getElementById("archivo");
  var email = document.forms["formulario"]["email"].value;

  var foto = o.files[0];
  var c = 0;
   
 
  if (email === "") {
    alert("Llene el campo Email");
  }else{
  if (o.files.length === 0 ) {
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
  }}
  if (c === 1) event.preventDefault();
  
}

//function validarLetras(){
  //return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
//}

export default registerRestaurant;
