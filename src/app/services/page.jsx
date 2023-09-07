import React from "react";
import Prints from "@components//Prints";
import Desi from "@components//Desi";
import Vestibules from "../../components/Vestibules";
import Awnings from "@components//Awnings";

const Services = () => {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-6 md:p-24 py-20 max-w-screen-xl mx-auto">
      <h2 className="text-[#C22D2D] text-center text-6xl tracking-wide underline decoration-double decoration-2 underline-offset-4">
        Services
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        {/* On larger screens, display as rows */}
        <div className="flex flex-row items-center mt-4 mx-4 md:flex-col">
          <Awnings />
        </div>
        <div className="flex flex-row items-center mt-4 mx-4 md:flex-col">
          <Vestibules />
        </div>
        <div className="flex flex-row items-center mt-4 mx-4 md:flex-col">
          <Prints />
        </div>
        <div className="flex flex-row items-center mt-4 mx-4 md:flex-col">
          <Desi />
        </div>
      </div>
    </div>
  );
};


export default Services;
