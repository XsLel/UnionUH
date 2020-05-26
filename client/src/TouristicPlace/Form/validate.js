export default function validate(values) {
  const errors = {};
  const isWhitespace = /^\s+$/m;

  if (!values.name || isWhitespace.test(values.name)) {
    errors.name = "El nombre es requerido, introduce un valor válido.";
  } else if (!(5 <= values.name.length && values.name.length <= 255)) {
    errors.name = "Solo se aceptan entre 5 y 255 caracteres.";
  }

  if (!values.description || isWhitespace.test(values.description)) {
    errors.description = "La descripción es requerida, introduce un valor válido.";
  }

  if (!values.address || isWhitespace.test(values.address)) {
    errors.address = "La dirección es requerida, introduce un valor válido.";
  }

  if (!values.schedules || isWhitespace.test(values.schedules)) {
    errors.schedules = "Los horarios son requeridos, introduce valores válidos.";
  }

  return errors;
}
