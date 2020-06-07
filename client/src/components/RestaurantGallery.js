import React from "react";
import { useRouteMatch } from "react-router-dom";
import RestaurantGalleryGrid from "./RestaurantGalleryGrid";

export function RestaurantGallery() {
  let {
    params: { restaurantId },
  } = useRouteMatch();

  return (
    <>
      <h1>Galeria Restaurante</h1>
      <p>Restaurante con id: {restaurantId}</p>
      <RestaurantGalleryGrid />
    </>
  );
}
