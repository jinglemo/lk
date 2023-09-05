"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Vestibules = () => {
  return (
    <Card className="card-custom">
      <div className="text-3xl p-3 text-center text-secondary">Vestibules</div>
      <div className="card-content flex flex-col items-center justify-center">
        <Link href="./portfolio">
          <Image
            width={400}
            height={400}
            priority={true}
            alt="Your Alt Text"
            src="/Vestibules/Vest4.jpeg"
          />
        </Link>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Vestibules for Homes and Stores
        </h5>
        <p className="flex font-normal text-gray-700 dark:text-gray-400">
          Discover optimal protection against the elements with our versatile
          vestibules for homes and stores. Our vestibules serve as a crucial
          barrier, shielding your space from harsh weather conditions while
          providing an inviting entryway. Seamlessly combining functionality
          with style, these meticulously designed additions create a
          weather-resistant buffer, ensuring a comfortable and inviting space.
          Upgrade your property with our vestibules and experience enhanced
          security and aesthetics.
        </p>
      </div>
    </Card>
  );
};

export default Vestibules;
