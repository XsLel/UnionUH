export default function validate({ name, description, address, schedules }) {
  const errors = {};
  const isWhitespace = /^\s+$/m;

  if (!name || isWhitespace.test(name)) {
    errors.name = "El nombre es requerido, introduce un valor válido.";
  } else if (!(5 <= name.length && name.length <= 255)) {
    errors.name = "Solo se aceptan entre 5 y 255 caracteres.";
  }

  if (!description || isWhitespace.test(description)) {
    errors.description =
      "La descripción es requerida, introduce un valor válido.";
  }

  if (!address || isWhitespace.test(address)) {
    errors.address = "La dirección es requerida, introduce un valor válido.";
  }

  if (!schedules || isWhitespace.test(schedules)) {
    errors.schedules =
      "Los horarios son requeridos, introduce valores válidos.";
  }

  return errors;
}
