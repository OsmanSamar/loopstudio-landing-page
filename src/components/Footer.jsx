import React from "react";
import logo from "../assets/logo.svg";
import {
  RiFacebookBoxFill,
  RiTwitterLine,
  RiPinterestLine,
  RiInstagramFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className=" flex flex-col bg-black justify-between text-white px-4  py-2 text-center md:flex md:flex-row ">
        <div className="flex flex-col items-center  md:flex-initial md:items-start">
          <div className=" mt-6 ml-4 md:ml-20 mb-4">
            <img src={logo} alt="logo" />
          </div>
          <ul
            className="  flex flex-col  items-center 
          font-josefin-sans mt-6 md:space-x-6 md:mt-0 md:flex  md:flex-row md:ml-20 "
          >
            <li className="mb-5  ">
              <button className="hover:underline underline-offset-8">
                A bout
              </button>
            </li>
            <li className="mb-5">
              <button className="hover:underline underline-offset-8">
                Careers
              </button>
            </li>
            <li className="mb-5">
              <button className="hover:underline underline-offset-8">
                Events
              </button>
            </li>
            <li className="mb-5">
              <button className="hover:underline underline-offset-8">
                Products
              </button>
            </li>
            <li className="mb-5">
              <button className="hover:underline underline-offset-8">
                Support
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center mt-6 ml-4 md:mr-20 ">
          <div className="md:ml-20">
            <ul className="flex   space-x-4  items-center cursor-pointer  ">
              <li>
                <RiFacebookBoxFill
                  // className="  transform transition-transform hover:scale-110"
                  // className="transform transition-transform hover:rotate-90"
                  className="hover:origin-top-left hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/50 "
                  size={24}
                />
              </li>
              <li>
                <RiTwitterLine
                  size={24}
                  // className=" hover:rounded-full hover:ring ring-white hover:ring-offset-0   "
                  className="hover:origin-top-left hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/50 "
                />
              </li>

              <li>
                <RiPinterestLine
                  size={24}
                  // className=" hover:underline hover:underline-offset-8 "
                  className="hover:origin-top-left hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/50 "
                />
              </li>
              <li>
                <RiInstagramFill
                  // className="  hover:underline :underline-offset-8"
                  className="hover:origin-top-left hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/50 "
                  size={24}
                />
              </li>
            </ul>
          </div>

          <div className="font-alata text-sm text-very-dark-gray   mt-6">
            &copy; 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </footer>
      <div className="text-center text-xs ">
        <p className="leading-8 ">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#s.osman" className="text-pink-300">
            Samar Osman
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Footer;
