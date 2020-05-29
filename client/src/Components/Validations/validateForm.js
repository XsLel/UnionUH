export default function validateForm(values) {
  let errors = {};

  if (values.nombreRestaurante === "") {
    errors.nombreRestaurante = "campo vacio";
  } 

    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
  

  
    if (!values.telefono) {
    } else if (!/([0-9]){8}/.test(values.telefono)) {
      errors.telefono = "El numero de no existe";
    }
  

  if (values.direccionRestaurante === "") {
    errors.direccionRestaurante = "campo vacio";
  }

  if (values.provincia === "") {
    errors.provincia = "Seleccione una provincia";
  }

  if (values.categoria === "") {
    errors.categoria = "Seleccione una categoria";
  }

  return errors;
}