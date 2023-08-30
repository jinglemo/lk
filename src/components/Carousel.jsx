"use client"
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css";
// import slides from "@/data/slides";

// import { Paragraph } from "@/components";

const Carousel = () => {
  
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state) => () => setOpen(state);

  const updateIndex = ({ index: current }) => setIndex(current);
//   const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
// you can add more image if you wantnpm
    {
      image: "./signs/sign1.jpeg",
      type: "Nature",
      title: "Installation",
    },
    {
      image: "./signs/green.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      image: "./signs/fingers.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      image: "./signs/freshspa.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      image: "./signs/borabora.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      image: "./signs/beautycenter.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
  ];



  const slides = galleryTab.map((item) => ({
    src: item.image, 
    width: 4040,
    height: 5000,
    srcSet: [
      { src: item.image, width: 320, height: 213 },
      { src: item.image, width: 640, height: 426 },
      { src: item.image, width: 1200, height: 800 },
      { src: item.image, width: 2048, height: 1365 },
      { src: item.image, width: 3840, height: 2560 },
    ],
  }));
  return (
    <section className="bg-[#F4F4F4] py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-[#C22D2D] font-black md:text-4xl sm:text-3xl xs:text-xl text-2xl mb-6">
            About Us
          </h2>
          <div className="text-gray-700 md:text-lg sm:text-md xs:text-sm leading-relaxed p-10">
            For over 20 years, LK Creative Signs & Awnings, Inc. has been the go-to
            source for premium signs and awnings in New York City and its
            surroundings. We're your partners in innovative design, expert
            craftsmanship, impeccable service, and competitive pricing. We stand
            behind our work with a solid guarantee, recognizing the pivotal role of
            effective design in business success. Serving Metro NYC, as well as NJ,
            CT, and PA, our signs grace storefronts, buildings, eateries, and retail
            establishments throughout the tristate area. Join us in making your mark
            on the cityscape.
          </div>
        </div>
        <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "1000px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
      </div>
    </section>
  );
};

export default Carousel;
