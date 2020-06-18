import React, { useState } from "react";
import "./styles/Gallery.css";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = (props) => {
  let { images } = props;

  //Prueba
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const change = (e) => {
    let id = parseInt(e.target.id);
    setPhotoIndex(id);
    setIsOpen(true);
  };

  function viewImages(images) {
    if (typeof images !== "undefined") {
      return (
        <Grid>
          {images.map((c, i) => (
            <GridColumn computer={4} tablet={8} mobile={16}>
              <div key={i} className="image-container">
                <img id={i} src={c} alt={c} onClick={change} />
              </div>
            </GridColumn>
          ))}
        </Grid>
      );
    }
  }

  return (
    <div>
      {viewImages(images)}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            let newPhotoIndex = (photoIndex + images.length - 1) % images.length;
            setPhotoIndex(newPhotoIndex);
          }}
          onMoveNextRequest={() => {
            let newPhotoIndex = (photoIndex + 1) % images.length;
            setPhotoIndex(newPhotoIndex);
          }}
        />
      )}
    </div>
  );
};

export default Gallery;
