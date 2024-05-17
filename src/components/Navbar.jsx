import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
// import IllustrationIntro from "../assets/desktop/image-hero.jpg";
// import IllustrationIntroMobile from "../assets/mobile/image-hero.jpg";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className=" bg-hero-image bg-cover bg-center py-12  ">
      <div
        className=" container flex items-center
        justify-between max-w-7xl mx-auto px-14 pt-2 font-josefin-sans  md:px-24 xl:px-1"
      >
        {/* The ReactComponent import syntax is a special syntax used by Create
          React App for importing SVG files as React components. */}
        <Logo alt="Logo Icon" class="  " />
        <div className="hidden space-x-6   md:flex">
          <a
            href="#About"
            className="text-white text-2xl  hover:underline underline-offset-8"
          >
            About
          </a>

          <a
            href="# Careers"
            className=" text-white text-2xl hover:underline underline-offset-8"
          >
            Careers
          </a>
          <a
            href="#Events"
            className="text-white text-2xl  hover:underline underline-offset-8 "
          >
            Events
          </a>
          <a
            href="#Products"
            className="text-white text-2xl hover:underline underline-offset-8"
          >
            Products
          </a>
          <a
            href="#Support"
            className="text-white text-2xl  hover:underline underline-offset-8"
          >
            Support
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button
            type="button"
            className=""
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <BiMenu
              size={26}
              className={` ${isOpen ? "hidden" : "block"}  text-white  `}
            />

            <AiOutlineClose
              size={26}
              className={` ${isOpen ? "block" : "hidden"} h-6 w-6 text-white `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={`  ${isOpen ? "block pt-2" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div
          className=" absolute flex flex-col items-left self-end py-10 px-10
            mt-2 space-y-6 font-bold bg-black text-white sm:w-full left-0
            right-0 drop-shadow-lg uppercase "
        >
          <a href="About" onClick={toggleMenu} className="cursor-pointer">
            About
          </a>
          <a href="Careers" onClick={toggleMenu} className="cursor-pointer">
            Careers
          </a>
          <a href="Events" onClick={toggleMenu} className="cursor-pointer">
            Events
          </a>
          <a href=" Products" onClick={toggleMenu} className="cursor-pointer">
            Products
          </a>
          <a href="categories" onClick={toggleMenu} className="cursor-pointer">
            Support
          </a>
        </div>
      </div>

      <h1>
        <button
          className=" ml-[10vw] border-2 border-white  text-white mt-20  p-8 w-[300px]
        font-josefin-sans text-left
        lg:text-left  md:ml-24  md:w-[415px] md:h-[194px]  text-3xl md:text-4xl lg:text-5xl  "
        >
          IMMERSIVE <br></br> EXPERIENCES <br></br> THAT DELIVER
        </button>
      </h1>
    </div>
  );
};

export default Navbar;
