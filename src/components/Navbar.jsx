"use client";
// import { useClient } from 'next';
import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import Image from "next/image";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Link from "next/link";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleDropdownClick = (title) => {
    setActive(active === title ? null : title);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-[#3450E5]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="text-[#EFF1FB] text-[30px] font-bold cursor-pointer flex"
          style={{ paddingLeft: "20px" }}
        >
          <Link href="/">New L.K. Creative</Link>
        </div>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((links) => (
            <div
              key={links.id}
              className={`${
                active === links.title ? " text-white" : "text-[#FCFCFC]"
              } hover:text-[#EFE959] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(links.title)}
            >
              {links.title === "Services" ? (
                <div>
                  <Dropdown inline label="Services">
                    <div><Link href="/services">Awnings/Installations</Link></div>
                    <div><Link href="/services">Vestibules</Link></div>
                    <div><Link href="/services">Prints</Link></div>
                    <div><Link href="/services">Web Designs</Link></div>
                    
                  </Dropdown>
                </div>
              ) : (
                // Render a regular links for other links
                <Link href={links.path}>{links.title}</Link>
              )}
            </div>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center relative">
  <Image
    src={toggle ? close : menu}
    alt="menu"
    width={28}
    height={28}
    onClick={() => setToggle(!toggle)}
    className="cursor-pointer"
  />
  <div
    className={`${
      !toggle ? "hidden" : "block"
    } p-6 bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-md`}
  >
    <ul className="list-none flex flex-col gap-4">
      {navLinks.map((links) => (
        <li
          key={links.id}
          className={`${
            active === links.title ? "text-white" : "text-secondary"
          } font-poppins font-medium cursor-pointer text-[16px]`}
          onClick={() => {
            setToggle(!toggle);
            setActive(links.title);
          }}
        >
          <Link href={links.path}>{links.title}</Link>
        </li>
      ))}
    </ul>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
