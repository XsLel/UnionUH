import React from "react";

function RestaurantImage(props) {
  const { image } = props;

  return (
    <div>
      <img className="restaurante" src={image} alt="ImageRestaurant" />
    </div>
  );
}

export default RestaurantImage;
