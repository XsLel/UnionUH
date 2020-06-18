import { createRef } from "react";

export default function verifyFile(files) {
  const acceptedFileTypes = "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
  const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim();
  });
  let errors = [];
  const imageMaxSize = 2048 * 1080;
  const imageMinSize = 1080 * 720;
  let currentFile = null;
  let currentFileType = null;
  let currentFileSize = null;
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      currentFile = files[i];
      currentFileType = currentFile.type;
      currentFileSize = currentFile.size;
      if (currentFileSize > imageMaxSize) {
        errors.push(
          "El tamaño de la imágen " +
            currentFile.name +
            " seleccionada es demasiado grande, por favor seleccione una imágen diferente"
        );
      }
      if (currentFileSize < imageMinSize) {
        errors.push(
          "La imagen " +
            currentFile.name +
            " tiene un resolución muy baja,  por favor seleccione una imágen diferente"
        );
      }

      if (!acceptedFileTypesArray.includes(currentFileType)) {
        errors.push("Este tipo de archivo no esta permitido");
      }
    }
  } else {
    errors.push("Por favor seleccione mas de 3 imágenes");
  }
  return errors;
}
