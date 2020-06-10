import React, { useState } from "react";
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

  const showPhotos = () => {
    if (typeof images !== "undefined") {
      return (
        <div>
          <div>
            {images.map((url, i) => (
              <div className="image-container">
                <img key={i} id={i} src={url} onClick={change} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {showPhotos()}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          /**nextSrc={images[(photoIndex + 1) % images.length]}
prevSrc={images[(photoIndex + images.length - 1) % images.length]}*/
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            let newPhotoIndex =
              (photoIndex + images.length - 1) % images.length;
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
