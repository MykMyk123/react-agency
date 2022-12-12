import React from "react";
import ftx from "../films/ftx.mp4";

export default function YouDoNothing() {
  return (
    <div className=" bg-black w-full h-[1200px] lg:h-[600px] flex items-center flex-col '">
      <div className="p-12 w-full h-[1200px] flex flex-col items-center lg:flex-row lg:h-[600px] lg:max-w-[1500px]">
        <div className="flex flex-col items-center lg:items-start lg:pr-[180px]">
          <h2
            className="text-white font-semibold text-5xl leading-[60px]
           pb-16 z-10 relative pt-14 lg:text-[100px] lg:leading-[100px]"
          >
            You literally do <span className=" text-cyan-400 ">nothing</span>{" "}
            <div className=" -z-10 absolute top-0 left-0 w-48 h-48 bg-cyan-600 rounded-full filter blur-2xl  animate-blob   "></div>
            <div className=" -z-10 absolute top-4 left-16 w-48 h-48 bg-cyan-400 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
          </h2>

          <p className="text-white text-xl z-10 relative lg:text-[27px] lg:leading-[33px]">
            You are a creator, You are already producing great content.
          </p>

          <p className="text-white text-xl z-10 relative mt-6 lg:text-[27px] lg:leading-[33px]">
            We analyze your videos, seperate best moments and then edit them
            with animations, titles and additonal footage to fit shorts style.
          </p>
        </div>
        <video
          src={ftx}
          autoPlay
          muted
          loop
          className="rounded-xl  my-16 md: w-[400px]"
        ></video>
      </div>
    </div>
  );
}
