export default function validateForm(values) {
  let errors = {};

  if (values.nombreRestaurante === "") {
    errors.nombreRestaurante = "campo vacío";
  } 

  if (!/^[a-zA-Z ]+$/.test(values.nombreRestaurante)) {
    errors.nombreRestaurante = "Nombre de Restaurante invalido solo se aceptan letras";
  }

    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "correo electronico invalido";
    }

  
    if (!values.telefono) {
    } else if (!/([0-9]){7}/.test(values.telefono)) {
      errors.telefono = "El numero de no existe";
    }
 

    if ((values.telefono != "" && !/^4(\d*)$/.test(values.telefono))|| !(0 <= values.telefono.length && values.telefono.length <= 7)) {
      errors.telefono = "El numero no existe";
    }
  

  if (values.direccionRestaurante === "") {
    errors.direccionRestaurante = "campo vacío";
  }

 
  return errors;
}
