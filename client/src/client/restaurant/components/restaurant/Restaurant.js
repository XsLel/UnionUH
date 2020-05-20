import React from "react";
import RestaurantImage from "../restaurantImage/RestaurantImage";
import Ranking from "../ranking/Ranking";

function Restaurant(props) {
  const { restaurant } = props;
  return (
    <div>
      <RestaurantImage image={restaurant.image} />
      <h1>{restaurant.name}</h1>
      <Ranking qualification={restaurant.qualification} />
    </div>
  );
}

export default Restaurant;
