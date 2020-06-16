import React from "react";
import "./styles/Gallery.css";
import { Grid, GridColumn, Image } from "semantic-ui-react";

const Gallery = (props) => {
  let { images } = props;

  //Prueba

  function viewImages(images) {
    if (typeof images !== "undefined") {
      return (
        <Grid>
          {images.map((c, i) => (
            <GridColumn computer={4} tablet={8} mobile={16}>
              <div key={i} className="image-container">
                <Image src={c} alt={c} />
              </div>
            </GridColumn>
          ))}
        </Grid>
      );
    }
  }

  return <div>{viewImages(images)}</div>;
};

export default Gallery;
