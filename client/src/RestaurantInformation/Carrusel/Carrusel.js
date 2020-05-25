import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';  /////npm install react-responsive-carousel --save





function showUrl(list) {

  
  return (
    <Carousel autoPlay >
      
          {list.map((url, i) => (
           <div>
          <img alt="" src={url} />
          <p className="legend">Disfruta Tu Comida</p>
          </div>
           ))}
        
    </Carousel>
        

  );
}

export default function Carrusel(props) {
  const { carousel } = props;
  

  return (
    
    <Fragment>
      {props ? (
        <Segment>
          <center>
            
            {showUrl(carousel)}
          
          </center>
        </Segment>
      ) : (
        <Segment loading></Segment>
      )}
    </Fragment>
  );
}


