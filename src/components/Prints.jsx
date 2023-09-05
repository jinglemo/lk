"use client";
import { Card, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Prints = () => {
  return (
    <div>
      <Card className="card-custom">
        <div className="text-3xl p-3 text-center text-secondary">
          LED and Light Boxes
        </div>
        <div className="card-content flex flex-col items-center justify-center">
          <Image
            width={400}
            height={400}
            priority={true}
            alt="Your Alt Text"
            src="/Signs/offfice.jpeg"
          />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Illuminate Your Brand with LED Light Boxes
          </h5>
          <p className="flex font-normal text-gray-700 dark:text-gray-400">
            Illuminate Your Brand with LED Light Boxes LED Light Boxes are a
            cost-efficient, eco-friendly, and highly versatile solution for
            boosting your brand's visibility. They provide superior visibility
            day and night, require minimal maintenance, and can be customized to
            perfectly match your brand's needs. Invest in LED Light Boxes to
            brighten your brand's path to success.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Prints;
