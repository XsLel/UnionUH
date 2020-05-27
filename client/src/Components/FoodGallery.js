import React from "react";
import { useRouteMatch } from "react-router-dom";

export function FoodGallery() {
  let {
    params: { restaurantId },
  } = useRouteMatch();

  return (
    <>
      <h1>Galeria Comida</h1>
      <p>Restaurante con id: {restaurantId}</p>
    </>
  );
}
