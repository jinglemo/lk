"use client";
import { Button, Card } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:h-screen mx-auto bg-[url('/herowallpaper.jpeg')] bg-cover bg-top overflow-hidden mt-10">
      <div className="h-full flex flex-col justify-center items-center px-10 md:px-40 mt-[100px]">
        <h1 className="text-[#F8E116] font-black md:text-6xl sm:text-5xl xs:text-2xl text-3xl text-center  md:mt-[-300px] xs:mt-[-150px] overflow-hidden "
        style={{
            textShadow: "2px 5px 5px rgba(0, 0, 0, 0.8)", // Your box shadow style
          }}
          >
          Welcome to LK Creatives Inc. - Your Premier Sign and
          Awning Destination in NYC
        </h1>
        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-16 xs:mt-8 w-full">
          <Card className="bg-[#EFF1FB] w-full md:w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              For no cost consultation, contact us at:
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div className="bold">6222 5the Ave. Brooklyn, NY 11220</div>
              <div>Cell: 646-932-6666</div>
              <div>Email: Lksign6222@gmail.com</div>
            </div>
            <Link href="./contact">
              <Button color="failure" pill className="mt-4">
                Get Quota Now
              </Button>
            </Link>
          </Card>
          <Card className="bg-[#EFF1FB] w-full md:w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              For no cost consultation, contact us at:
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <div className="bold">6222 5the Ave. Brooklyn, NY 11220</div>
              <div>Cell: 646-932-6666</div>
              <div>Email: Lksign6222@gmail.com</div>
            </div>
            <Link href="./contact">
              <Button color="failure" pill className="mt-4">
                Get Quota Now
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
