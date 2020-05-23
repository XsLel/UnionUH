export default function validate(values) {
  const errors = {};
  const alphanumericMax225 = /^[a-z0-9\s*]{2,254}$/s;
  const alphanumeric = /^[A-Za-z0-9\s+]+$/m;
  const isWhitespace = /^\s+$/m;

  if (!values.name || isWhitespace.test(values.name)) {
    errors.name = "El nombre es requerido, introduce un valor válido.";
  } else if (!alphanumericMax225.test(values.name)) {
    errors.name =
      "Solo se aceptan números y letras. Solo se aceptan hasta 255 caracteres.";
  }

  if (!values.description || isWhitespace.test(values.description)) {
    errors.description =
      "La descripción es requerida, introduce un valor válido.";
  } else if (!alphanumeric.test(values.description)) {
    errors.description = "Solo se aceptan números y letras.";
  }

  if (!values.address || isWhitespace.test(values.address)) {
    errors.address =
      "La dirección es requerida, introduce un valor válido.";
  } else if (!alphanumeric.test(values.address)) {
    errors.address = "Solo se aceptan números y letras.";
  }

  if (!values.schedules || isWhitespace.test(values.schedules)) {
    errors.schedules =
      "Los horarios son requeridos, introduce valores válidos.";
  } else if (!alphanumeric.test(values.schedules)) {
    errors.schedules = "Solo se aceptan números y letras.";
  }

  return errors;
}
