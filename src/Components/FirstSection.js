import React from "react";
import TikTokVideos from "./TikTokVideos";

export default function FirstSection() {
  return (
    <>
      <div className="  bg-black w-full h-[650px] flex justify-center items-center ">
        <div className=" min-w-[300px] h-full flex items-center flex-col   ">
          <div className="relative">
            <div className=" absolute top-0 left-2 w-48 h-48 bg-cyan-200 rounded-full filter blur-2xl  animate-blob "></div>
            <div className=" absolute top-0 right-2 w-48 h-48 bg-cyan-400 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
            <div className=" absolute top-28 -left-12 w-48 h-48 bg-cyan-700 rounded-full  filter blur-2xl animate-blob animation-delay-4000  "></div>
          </div>

          <h1 className=" text-white text-7xl text-center font-semibold z-10 drop-shadow">
            {" "}
            <br /> We do <span className="text-cyan-400">Shorts.</span>
          </h1>
          <button
            className=" z-10  text-white rounded-3xl px-8 py-4 m-11  font-sans font-semibold
                     bg-cyan-400 hover:border-cyan-200 hover:border hover:text-cyan-200 hover:scale-110 duration-300"
          >
            <a>Contact us</a>
          </button>
          <TikTokVideos />
        </div>
      </div>
    </>
  );
}
