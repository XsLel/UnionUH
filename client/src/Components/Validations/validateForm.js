export default function validateForm(values) {
  let errors = {};

  if (values.nameRestaurant == "") {
    errors.nameRestaurant = "campo vacío";
  } else {
    if (!/^[a-z ^ ñ A-Z ^ Ñ ]+$/.test(values.nameRestaurant)) {
      errors.nameRestaurant =
        "Nombre de Restaurante invalido solo se aceptan letras [A-Z]";
    }
  }

  if (!values.email) {
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "correo electronico invalido";
  }

  if (!values.phone) {
  } else if (!/([0-9]){7}/.test(values.phone)) {
    errors.phone = "El numero de no existe";
  }

  if (
    (values.phone != "" && !/^4(\d*)$/.test(values.phone)) ||
    !(0 <= values.phone.length && values.phone.length <= 7)
  ) {
    errors.phone = "El numero no existe";
  }

  if (values.restaurantAddress === "") {
    errors.restaurantAddress = "campo vacío";
  }

  if (values.category === "") {
    errors.category = "Seleccione una categoria";
  }

  if (values.province === "") {
    errors.province = "Seleccione una provincia";
  }

  return errors;
}
