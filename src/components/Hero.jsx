"use client";
import { Card, Button } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full md:h-screen mx-auto bg-[url('/herowallpaper.jpeg')] bg-cover bg-top overflow-hidden mt-10">
      <div className="h-full flex flex-col justify-center items-center px-10 md:px-40 mt-[100px]">
        <div>
        <h1
    className="text-[#F8E116] font-black text-3xl md:text-6xl sm:text-5xl xs:text-2xl text-center md:mt-[-300px] xs:mt-[-150px] overflow-hidden px-4 py-2"
    style={{
      textShadow: "2px 5px 5px rgba(0, 0, 0, 0.8)",
    }}
  >
    Welcome to New L.K. Creative Inc. - Your Premier Sign and Awning
    Destination in NYC
  </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-16 xs:mt-8 w-full">
          <Card className="bg-[#EFF1FB] red-border w-full md:w-1/2">
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
          <Card className="bg-[#EFF1FB] red-border w-full md:w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Directions:
            </h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.629322857104!2d-74.02060392372499!3d40.63805597140473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2454d8912adbf%3A0x23951ae3fd118d0f!2sL.K.%20Creative%20Sign%20Inc!5e0!3m2!1sen!2sus!4v1693423090378!5m2!1sen!2sus"></iframe>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
