// scr/app/page.jsx

import React from "react";
import Hero from "@components//Hero";
import Carousel from "@components//Carousel";
import Services from "./services/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Carousel />
    </div>
  );
};

export default Home;
