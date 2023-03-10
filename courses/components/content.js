import React from "react";
import Carousel from "./carrousel";
import AgeSector from "./ageSelector";

export default function content() {
  return (
    <div className="w-full ">
      <Carousel />
      <AgeSector />
      <script src="http://localhost:3002/build/courses-list.js" />
    </div>
  );
};
