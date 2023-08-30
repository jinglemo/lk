// Components/Gallery.js
"use client"
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({images, maxVisibleImages}) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");


  const visibleImages = images.slice(0, maxVisibleImages);

  const slides = images.map((item) => ({
    src: item.image,
    width: 4040,
    height: 4000,
  }));


  return (
    <div className="w-full">
     
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {visibleImages.map((x, index) => {
            return (
              <div key={index} className="md:h-[15vw] h-[40vh] relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.image}")` }}
                  >
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      {/* <div>{x.type}</div> */}
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.image);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
     
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;