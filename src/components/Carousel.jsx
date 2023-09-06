"use client";
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
      image: "./Signs/deli.jpeg",
      type: "Nature",
      title: "Deli",
    },
    {
      image: "./Signs/mala.jpeg",
      type: "Nature",
      title: "Mala Resturant",
    },
    {
      image: "./signs/freshspa.jpeg",
      type: "Nature",
      title: "Spa",
    },
    {
      image: "./signs/borabora.jpeg",
      type: "Nature",
      title: "Bora Bora",
    },
    {
      image: "./signs/beautycenter.jpeg",
      type: "Nature",
      title: "Beauty Center",
    },
    {
      image: "./awnings/signs29.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs27.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs2.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs19.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs18.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs6.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs23.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs25.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs5.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs4.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs3.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/signs12.jpeg",
      type: "Nature",
      title: "Vestibules",
    },
    {
      image: "./awnings/sign22.jpeg",
      type: "Nature",
      title: "Vestibules",
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
    <section className=" py-20">
      <div className="container mx-auto px-6">
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
              maxWidth: "100%",
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
