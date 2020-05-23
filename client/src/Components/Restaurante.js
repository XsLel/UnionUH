import React from "react";
import Navbar from "./Menu";
import Inforestaurant from "./Information";
import Commentrestaurant from "./Comments";
import Foot from "./Footer";

export function Restaurante() {
  return (
    <>
      <Navbar />
      <Inforestaurant />
      <Commentrestaurant />
      <Foot />
    </>
  );
}
