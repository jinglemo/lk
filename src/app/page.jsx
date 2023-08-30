// scr/app/page.jsx

import React from "react";
import Carousel from "@components//Carousel";
import { styles } from "../styles";
import Hero from "@components//Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
    </div>
  );
};

export default Home;
