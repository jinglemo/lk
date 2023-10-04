"use client";
import Gallery from "@components//Gallery";
import { galleryTab, Vestibules, led, websites, Awnings } from "../../constants";


const Portfolio = () => {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-6 md:p-24 py-20 max-w-screen-xl mx-auto">
      <div className=" text-[#C22D2D] flex flex-col items-center justify-between pb-2 text-6xl tracking-wide underline decoration-double decoration-2 underline-offset-4">
        Portfolio
      </div>
      <div className="text-3xl p-5 text-secondary">Signs/Awnings</div>
      <Gallery images={Awnings} maxVisibleImages={6} />
      <div className="text-3xl p-5 text-secondary">Vestibules</div>
      <Gallery images={Vestibules} maxVisibleImages={6} />
      <div className="text-3xl p-5 text-secondary">LED and Light Boxes</div>
      <Gallery id="prints" images={led} maxVisibleImages={6} />
      <div className="text-3xl p-5 text-secondary">Web Designs</div>
      <Gallery images={websites} maxVisibleImages={6} />
    </div>
  );
};

export default Portfolio;
