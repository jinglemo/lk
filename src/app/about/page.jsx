"use client";
import React, { useState } from "react";
import Carousel from "@components//Carousel";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="text-center">
        <h2 className="text-[#C22D2D] font-black md:text-4xl sm:text-3xl xs:text-xl text-2xl mb-6 pt-10">
          About Us
        </h2>
        <div className="text-gray-700 md:text-lg sm:text-md xs:text-sm leading-relaxed p-10">
          For over 20 years, LK Creative Signs & Awnings, Inc. has been the
          go-to source for premium signs and awnings in New York City and its
          surroundings. We're your partners in innovative design, expert
          craftsmanship, impeccable service, and competitive pricing. We stand
          behind our work with a solid guarantee, recognizing the pivotal role
          of effective design in business success. Serving Metro NYC, as well as
          NJ, CT, and PA, our signs grace storefronts, buildings, eateries, and
          retail establishments throughout the tristate area. Join us in making
          your mark on the cityscape.
        </div>

        <Carousel />
      </div>
    </div>
  );
};

export default About;
