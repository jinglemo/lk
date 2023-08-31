"use client";
import { Card } from "flowbite-react";
import Image from "next/image";

const Awnings = () => {
  return (
    <Card className="card-custom">
      <div className="text-3xl p-3 text-center text-secondary">Awnings/Signs</div>
      <div className="card-content flex flex-col items-center justify-center">
        <Image
          width={400}
          height={400}
          priority={true}
          alt="Your Alt Text"
          src="/Awnings/install1.jpeg"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Quality Awnings and Signs
        </h5>
        <p className="flex font-normal text-gray-700 dark:text-gray-400">
          Elevate your space with our premium awnings and signs. Crafted for
          outdoor elegance, our collection embodies meticulous craftsmanship
          that complements any style. With enduring quality, our awnings and
          signs are made from premium materials, combining charm with
          durability. Customize sizes, shapes, and colors to seamlessly
          integrate with your vision. Transform your surroundings with design
          artistry and timeless beauty.
        </p>
      </div>
    </Card>
  );
};

export default Awnings;
