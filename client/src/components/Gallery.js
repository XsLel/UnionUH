import React from "react";
import "./styles/Gallery.css";

const Gallery = (props) => {
  let { images } = props;

  //Prueba

  function viewImages(images) {
    if (typeof images !== "undefined") {
      return (
        <div className="images">
          {images.map((c, i) => (
            <div key={i} className="image-container">
              <img src={c} alt={c} />
            </div>
          ))}
        </div>
      );
    }
  }

  return <div>{viewImages(images)}</div>;
};

export default Gallery;
