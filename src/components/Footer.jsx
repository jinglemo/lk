"use client";
import { Footer, Card, Button } from "flowbite-react";
import Link from "next/link";

const Foot = () => {
  return (
    <Footer container >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            alt="LkCreatives Logo"
            href="https://newlkcreative.com"
            name="New L.K. Creative"
            src="/logo.jpeg"
          />
          <Footer.LinkGroup className="sm:flex sm:items-center sm:justify-between">
            <Footer.Link href="/about">| About |</Footer.Link>
            <Footer.Link href="/">| Home |</Footer.Link>
            <Footer.Link href="/portfolio">| Portfolio |</Footer.Link>
            <Footer.Link href="/contact">| Contact |</Footer.Link>
          </Footer.LinkGroup>
        </div>
        
        <Footer.Copyright by="New L.K. Creative™" href="#" year={2002} />
      </div>
    </Footer>
  );
};

export default Foot;
