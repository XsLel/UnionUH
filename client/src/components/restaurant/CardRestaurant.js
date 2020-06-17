import React from "react";
import RestaurantImage from "../restaurantImage/RestaurantImage";
import Ranking from "../ranking/Ranking";
import "./Restaurant.css";
import { useHistory } from "react-router-dom";

function CardRestaurant(props) {
  let history = useHistory();
  const { restaurant } = props;
  const { id, name, qualification } = restaurant;
  return (
    <div
      className={"card-restaurant"}
      onClick={() => history.push(`/restaurants/${restaurant.id}`)}>
      <RestaurantImage id={id} />
      <div className={"description"}>
        <h4>{name}</h4>
        <Ranking qualification={qualification} />
      </div>
    </div>
  );
}

export default CardRestaurant;
