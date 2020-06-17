import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import { Carousel } from "react-responsive-carousel"; /////npm install react-responsive-carousel --save

function showUrl(list, description, name) {
  return (
    <div className="group">
      <Carousel
        autoPlay
        autoPlay
        dynamicHeight={true}
        showThumbs={false}
        showStatus={false}>
        {list.map((url, i) => (
          <div key={i}>
            <img alt="" src={url} />
          </div>
        ))}
      </Carousel>
      <div className="data">
        <h1 className="title">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default function carousel(props) {
  //// carrusel >>Carousel
  const { carousel, description, name } = props; //// carrusel >>Carousel

  return (
    <Fragment>
      {props ? (
        <Segment>
          <center>{showUrl(carousel, description, name)}</center>
        </Segment>
      ) : (
        <Segment loading></Segment>
      )}
    </Fragment>
  );
}
