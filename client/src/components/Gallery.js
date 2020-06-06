import React from "react";

const Gallery = (props) => {
  let { images } = props;

  //Prueba
  if (typeof images !== "undefined") {
    console.log("Hola desde el componente galería");
    console.log(images);
  }

  return <h4>Galería</h4>;
};

export default Gallery;
