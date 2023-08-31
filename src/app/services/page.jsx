"use client";
import React from "react";
import Prints from "@components//Prints";
import Desi from "@components//Desi";
import Vestibules from "../../components/Vestibules";
import Awnings from "@components//Awnings";

const Services = () => {
  return (
    <div className="min-h-screen flex-col items-center justify-between p-24 py-20 ">
      <h2 className="text-[#C22D2D] flex flex-col items-center justify-between pb-2 text-6xl tracking-wide underline decoration-double decoration-2 underline-offset-4">
        Services
      </h2>
      <div className="flex flex-wrap justify-between space-y-4">
        <div className="flex flex-col items-center mt-4">
            <Prints />
        </div>
        <div className="flex flex-col items-center mt-4">
            <Desi />
        </div>
        <div className="flex flex-col items-center mt-4">
            <Awnings />
        </div>
        <div className="flex flex-col items-center mt-4">
            <Vestibules />
        </div>
      </div>
    </div>
  );
};

export default Services;
