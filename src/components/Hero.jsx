import React from "react";
import HeroImg from "../assets/desktop/image-interactive.jpg";
import HeroMobileImg from "../assets/mobile/image-interactive.jpg";

const Hero = () => {
  return (
    <div class="relative grid grid-cols-1 gap-2  max-w-7xl mx-auto  px-8 ">
      <div class="  lg:flex lg:flex-row lg:items-center  ">
        {/* img */}
        <div class="lg:flex-1 relative lg:py-20">
          {/*  Image for md breakpoint */}
          <img
            src={HeroImg}
            alt="Hero Img"
            className="md:h-[400px] md:ml-24 mt-10  hidden sm:block"
          />
          {/*  Image for sm breakpoint */}
          <img
            src={HeroMobileImg}
            alt="Hero Img"
            className=" mt-10 block sm:hidden   "
          />
        </div>
        {/* img */}
        {/* White overlay */}

        <div
          className=" mt-2 font-josefin-sans bottom-0 right-24 xl:right-52 bg-white shadow-none rounded  p-12
         w-full lg:w-auto text-center   md:text-left md:absolute lg:flex-1 lg:mt-0  "
        >
          <h2 className="text-2xl font-bold mt-4 mb-4 md:text-4xl md:font-light text-gray-800">
            THE LEADER IN<br></br> INTERACTIVE VR
          </h2>
          <p className="text-gray-700 text-pretty text-sm mb-12 md:text-sm">
            Founded in 2011, Loopstudio has been producing world-class
            <br></br> virtual reality projects for some of the best companies
            around the
            <br></br>
            globe. Our award-winning creations have transformed<br></br>{" "}
            businesses through digital experiences that to their brand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
