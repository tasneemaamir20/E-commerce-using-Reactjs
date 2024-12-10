import React from "react";
import MainCarousel from "../../Components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className=" space-y-10 py-20 flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel sectionName={"Men's Shoes"} />
        <HomeSectionCarousel sectionName={"Men's Shirt"} />
        <HomeSectionCarousel sectionName={"Women's Saree"} />
        <HomeSectionCarousel sectionName={"Womens Top"} />
        <HomeSectionCarousel sectionName={"Womes Dress"} />
      </div>
    </div>
  );
};

export default HomePage;
