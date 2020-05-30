export default function validateForm(values) {
  let errors = {};

  if (values.nombreRestaurante === "") {
    errors.nombreRestaurante = "campo vacío";
  } 

    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

  
    if (!values.telefono) {
    } else if (!/([0-9]){7}/.test(values.telefono)) {
      errors.telefono = "El numero de no existe";
    }


    if (values.telefono != "" && !(1 <= values.telefono.length && values.telefono.length <= 7) && !/^444(\d*)$/.test(values.telefono)) {
      errors.telefono = "El numero no existe";
    }
  

  if (values.direccionRestaurante === "") {
    errors.direccionRestaurante = "campo vacío";
  }

 
  return errors;
}