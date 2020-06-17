import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"; /////npm install react-responsive-carousel --save

function showUrl(list) {
  return (
    <Carousel
      autoPlay
      showStatus={false}
      showThumbs={false}
      dynamicHeight={true}
    >
      {list.map((url, i) => (
        <div key={i}>
          <img alt="" src={url} />
          <p className="legend">Disfruta Tu Comida</p>
        </div>
      ))}
    </Carousel>
  );
}

export default function carousel(props) {
  //// carrusel >>Carousel
  const { carousel } = props; //// carrusel >>Carousel

  return (
    <Fragment>
      {props ? (
        <Segment>
          <center>{showUrl(carousel)}</center>
        </Segment>
      ) : (
        <Segment loading></Segment>
      )}
    </Fragment>
  );
}
