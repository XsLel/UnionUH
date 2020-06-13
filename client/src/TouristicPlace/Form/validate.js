export default function validate({ name, description, address, schedules }) {
  const errors = {};
  const isWhitespace = /^\s+$/m;
  const validSequence = /^[ñÑ]*\w+[.,-:ñÑáéíóúÁÉÍÓÚ]*$/;
  const validSequenceMsg = "Ingresa una secuencia de caracteres válidos.";

  if (!name || isWhitespace.test(name)) {
    errors.name = "El nombre es requerido, introduce un valor válido.";
  } else if (!(5 <= name.length && name.length <= 255)) {
    errors.name = "Solo se aceptan entre 5 y 255 caracteres.";
  } else if (!validSequence.test(name)) {
    errors.name = validSequenceMsg;
  }

  if (!description || isWhitespace.test(description)) {
    errors.description = "La descripción es requerida, introduce un valor válido.";
  } else if (!validSequence.test(description)) {
    errors.description = validSequenceMsg;
  }

  if (!address || isWhitespace.test(address)) {
    errors.address = "La dirección es requerida, introduce un valor válido.";
  } else if (!validSequence.test(address)) {
    errors.address = validSequenceMsg;
  }

  if (!schedules || isWhitespace.test(schedules)) {
    errors.schedules = "Los horarios son requeridos, introduce valores válidos.";
  } else if (!validSequence.test(schedules)) {
    errors.schedules = validSequenceMsg;
  }

  return errors;
}
