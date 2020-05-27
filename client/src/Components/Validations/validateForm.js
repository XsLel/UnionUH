export default function validateForm(values) {
  let errors = {};
  
  if(values.email=== ""){
    errors.email = "campo vacio";
  }else{
    if (!values.email) {
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Correo invalido";
    }
  } 
  if(values.telefono ===""){
    errors.telefono = "campo vacio";
  }else{
    if (!values.telefono) {
    } else if (!/([0-9]){8}/.test(values.telefono)) {
      errors.telefono = "El numero no existe";
    }
  }
  if(values.nombreRestaurante=== ""){
    errors.nombreRestaurante = "campo vacio";
  }else{
    if (!values.nombreRestaurante) {
    } else if (!/[A-Z]\S [a-z]+/.test(values.nombreRestaurante)) {
      errors.nombreRestaurante = "Caracter no valido: use solo letras y numeros";
    }
  } 
  return errors;
}
