// scr/app/page.jsx

import React from "react";
import Hero from "@components//Hero";
import Carousel from "@components//Carousel";
import Services from "./services/page";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
