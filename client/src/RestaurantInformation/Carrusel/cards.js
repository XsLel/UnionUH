import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



class cards extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    
                </div>
              
              
            </Carousel>
        );
    }
}

