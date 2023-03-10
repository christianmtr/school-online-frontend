import React from "react";
import Carousel from "./carrousel";
import Cards from "./cards";
import AgeSector from "./ageSelector";

export default function content() {
  return (
    <div className="w-full ">
      <Carousel />
      <AgeSector />
      <Cards />
    </div>
  );
};
