import React from "react";
import { useMediaQuery } from "react-responsive";

import DeepEarth from "../assets/desktop/image-deep-earth.jpg";
import NightArcade from "../assets/desktop/image-night-arcade.jpg";
import SoccerTeamVr from "../assets/desktop/image-soccer-team.jpg";
import TheGrid from "../assets/desktop/image-grid.jpg";
import FromUpAboveVr from "../assets/desktop/image-from-above.jpg";
import PocketBorealis from "../assets/desktop/image-pocket-borealis.jpg";
import TheCuriosity from "../assets/desktop/image-curiosity.jpg";
import MakeItFisheye from "../assets/desktop/image-fisheye.jpg";
import Deep from "../assets/mobile/image-deep-earth.jpg";
import Night from "../assets/mobile/image-night-arcade.jpg";
import SoccerTeam from "../assets/mobile/image-soccer-team.jpg";
import Grid from "../assets/mobile/image-grid.jpg";
import FromUpAbove from "../assets/mobile/image-from-above.jpg";
import PocketBoreali from "../assets/mobile/image-pocket-borealis.jpg";
import Curiosit from "../assets/mobile/image-curiosity.jpg";
import Fisheye from "../assets/mobile/image-fisheye.jpg";

const images = [
  { id: 1, image: DeepEarth, title: "Deep Earth" },
  { id: 2, image: NightArcade, title: "Night Arcade" },
  { id: 3, image: SoccerTeamVr, title: "Soccer Team VR" },
  { id: 4, image: TheGrid, title: "The Grid" },
  { id: 5, image: FromUpAboveVr, title: "From Up Above VR" },
  { id: 6, image: PocketBorealis, title: "Pocket Borealis" },
  { id: 7, image: TheCuriosity, title: "The Curiosity" },
  { id: 8, image: MakeItFisheye, title: "Make It Fisheye" },
];

const mobileimg = [
  { id: 1, image: Deep, title: "Deep Earth" },
  { id: 2, image: Night, title: "Night Arcade" },
  { id: 3, image: SoccerTeam, title: "Soccer Team VR" },
  { id: 4, image: Grid, title: "The Grid" },
  { id: 5, image: FromUpAbove, title: "From Up Above VR" },
  { id: 6, image: PocketBoreali, title: "Pocket Borealis" },
  { id: 7, image: Curiosit, title: "The Curiosity" },
  { id: 8, image: Fisheye, title: "Make It Fisheye" },
];

const CreationsDesktop = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  return (
    <>
      {/* Render h2 and button differently based on screen size */}
      {isMobile ? (
        <div className="text-center max-w-7xl mx-auto px-8 py-12 font-josefin-sans">
          <h2 className="text-4xl mb-8 uppercase">Our creations</h2>
          {/* <div className="mb-8">
            <button className="border-2 border-black px-10 py-2 text-black uppercase cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white">
              See All
            </button>
          </div> */}
        </div>
      ) : (
        <div className="container flex items-center justify-between max-w-7xl mx-auto px-28 py-12 font-josefin-sans">
          <h2 className="text-center text-4xl uppercase">Our creations</h2>
          <div className="">
            <button className=" border  font-bold border-black px-10 py-2 text-black uppercase cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white">
              S e e A l l
            </button>
          </div>
        </div>
      )}

      {/* Grid for images */}
      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "grid-cols-4"
        } gap-6 px-8 md:gap-6 md:px-28 xl:px-60 pb-28`}
      >
        {isMobile
          ? mobileimg.map((image) => (
              <div
                key={image.id}
                className="relative   cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70 text-white hover:text-black"
              >
                <img src={image.image} alt={image.title} />
                <h3 className="absolute bottom-0 left-0 font-josefin-sans px-10 py-6 uppercase text-3xl">
                  {image.title}
                </h3>
              </div>
            ))
          : images.map((image) => (
              <div
                key={image.id}
                className="relative cursor-pointer hover:transform transition-transform hover:scale-110 hover:opacity-70 text-white hover:text-black"
              >
                <img src={image.image} alt={image.title} />
                <h3 className="absolute bottom-0 left-0 font-josefin-sans px-10 py-6 uppercase text-2xl">
                  {image.title}
                </h3>
              </div>
            ))}
      </div>
      {isMobile ? (
        <div className="  px-20 ml-12  font-josefin-sans mb-12">
          <button
            className="border border-black px-10 py-2 text-black font-bold
          uppercase cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white"
          >
            S e e A l l
          </button>
        </div>
      ) : null}
    </>
  );
};

export default CreationsDesktop;
