import React from "react";
import ftx from "../films/ftx.mp4";

export default function YouDoNothing() {
  return (
    <div className=" bg-black w-full h-[1200px] '">
      <div className="p-12 w-full h-[1200px] ">
        <h2 className="text-white font-semibold text-5xl leading-[60px] pb-16 z-10 relative pt-14">
          You literally do <span className=" text-cyan-400 ">nothing</span>{" "}
        </h2>
        <div className="relative z-0">
          <div className=" absolute top-0 left-2 w-48 h-48 bg-cyan-600 rounded-full filter blur-2xl  animate-blob   "></div>
          <div className=" absolute top-0 right-2 w-48 h-48 bg-cyan-400 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
        </div>
        <p className="text-white text-xl z-10 relative">
          You are a creator, You are already producing great content.
        </p>

        <p className="text-white text-xl z-10 relative mt-6 ">
          We analyze your videos, seperate best moments and then edit them with
          animations, titles and additonal footage to fit shorts style.
        </p>
        <video
          src={ftx}
          autoPlay
          muted
          loop
          className="rounded-xl my-11"
        ></video>
      </div>
    </div>
  );
}
