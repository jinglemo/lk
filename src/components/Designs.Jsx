"use client"
import { Card } from "flowbite-react";
import Image from "next/image";


const Designs = () => {
    return (
        <div>
          <Card className="card-custom">
            <div className="card-content">
                <div className="text-3xl p-5 text-secondary">Designs</div>
              <Image width={500} height={500} priority={true} alt="Your Alt Text" src="/Signs/offfice.jpeg" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="flex font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far,
                in reverse chronological order.
              </p>
            </div>
          </Card>
        </div>
      );
};

export default Designs;