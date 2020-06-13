import React, { Fragment } from "react";
import { Rating, Grid, GridRow, GridColumn } from "semantic-ui-react";
const FactorRating = (props) => {
    const handleRateOne = (e, { rating }) => {
      props.serviceRating1(rating); 
    };
    const handleRateTwo = (e, { rating }) => {
     props.priceRating3(rating);
    };
    const handleRateThree = (e, { rating }) => {
     props.locationRating2(rating);
    };
    const handleRateFour = (e, { rating }) => {
     props.attentionclient4(rating);
    };
  return (
    <Fragment>
      <h2>Puntuacion de factores</h2>
      <div className="container">
        <GridColumn>
          <Grid columns={2}>
            <GridRow>
              <h4>Sevicio</h4>
              <Rating 
              icon="star" 
              onRate={handleRateOne} 
              defaultRating={0} 
              maxRating={5}
              size="massive" 
              />
            </GridRow>
          </Grid>
          <Grid columns={2}>
            <GridRow>
              <h4>Precio</h4>
              <Rating 
              icon="star" 
              onRate={handleRateTwo} 
              defaultRating={0} 
              maxRating={5} 
              size="massive"
              />
            </GridRow>
          </Grid>
          <Grid columns={2}>
            <GridRow>
              <h4>Ubicacion</h4>
              <Rating icon="star" 
              onRate={handleRateThree} 
              defaultRating={0} 
              maxRating={5}
              size="massive"
               />
            </GridRow>
          </Grid>
          <Grid columns={2}>
            <GridRow>
              <h4>Atencion al cliente</h4>
              <Rating icon="star"
               onRate={handleRateFour} 
               defaultRating={0} 
               maxRating={5} 
               size="massive"
               />
            </GridRow>
          </Grid>
        </GridColumn>
      </div>
    </Fragment>
  );
};

export default FactorRating;
