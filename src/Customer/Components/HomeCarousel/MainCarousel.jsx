import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./1.webp";
import image2 from "./2.webp";
import image3 from "./1.webp";
import image4 from "./2.webp";
import image5 from "./1.webp";

const items = [
  <div className="item" data-value="1">
    <img src={image1} style={{ width: "100%", height: "550px" }} alt="" />
  </div>,
  <div className="item" data-value="2">
    <img src={image2} style={{ width: "100%", height: "550px" }} alt="" />
  </div>,
  <div className="item" data-value="3">
    <img src={image3} style={{ width: "100%", height: "550px" }} alt="" />
  </div>,
  <div className="item" data-value="4">
    <img src={image4} style={{ width: "100%", height: "550px" }} alt="" />
  </div>,
  <div className="item" data-value="5">
    <img src={image5} style={{ width: "100%", height: "550px" }} alt="" />
  </div>,
];

const MainCarousel = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    controlsStrategy="alternate"
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
  />
);
export default MainCarousel;
