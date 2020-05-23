export default function validate(values) {
  let errors = {};
  const alfanumericoMax255 = /^[a-z0-9\s*]{2,254}$/s;
  const alfanumerico = /^[A-Za-z0-9\s+]+$/m;
  const vacio = /^\s+$/m;
  if (!values.name || vacio.test(values.name)) {
    errors.name = "El siguiente campo es requerido, intruduzca un valor valido";
  } else if (!alfanumericoMax255.test(values.name)) {
    errors.name =
      "Solo se acepta caracteres alfanumericos y una cadena menos a 255";
  }

  if (!values.description || vacio.test(values.description)) {
    errors.description =
      "El siguiente campo es requerido, intruduzca un valor valido";
  } else if (!alfanumerico.test(values.description)) {
    errors.description = "Solo se acepta caracteres alfanumericos";
  }

  if (!values.address || vacio.test(values.address)) {
    errors.address =
      "El siguiente campo es requerido, intruduzca un valor valido";
  } else if (!alfanumerico.test(values.address)) {
    errors.address = "Solo se acepta caracteres alfanumericos";
  }

  if (!values.schedules || vacio.test(values.schedules)) {
    errors.schedules =
      "El siguiente campo es requerido, intruduzca un valor valido";
  } else if (!alfanumerico.test(values.schedules)) {
    errors.schedules = "Solo se acepta caracteres alfanumericos";
  }

  return errors;
}
