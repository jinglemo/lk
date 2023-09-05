"use client";
import { Card } from "flowbite-react";
import Image from "next/image";

const Desi = () => {
  return (
    <Card className="card-custom">
      <div className="text-3xl p-3 text-center text-secondary">Web Designs</div>
      <div className="card-content flex flex-col items-center justify-center">
        <Image
          width={400}
          height={400}
          priority={true}
          alt="Your Alt Text"
          src="/jingmo.jpeg"
        />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Boost Your Brand with Our Web Design
        </h5>
        <p className="flex font-normal text-gray-700 dark:text-gray-400">
          Our web design services offer a perfect blend of form and function,
          creating visually appealing websites that are easy to navigate and
          optimized for all devices. With a responsive, user-friendly design,
          you can capture your audience's attention and keep them engaged,
          leading to increased conversions and a stronger online presence.
          Invest in outstanding web design, and watch your brand thrive in the
          digital realm.
        </p>
      </div>
    </Card>
  );
};

export default Desi;
