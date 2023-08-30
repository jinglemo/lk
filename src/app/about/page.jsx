"use client";
import React, { useState } from "react";
import { Button } from "flowbite-react";
import  DefaultCarousel  from "@components//Carousel";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
      <DefaultCarousel />
    </div>
  );
};

export default About;
