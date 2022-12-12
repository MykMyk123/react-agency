import React from "react";
import video from "../films/test.mp4";
import gary from "../films/garyvee.mp4";
import alex from "../films/alex.mp4";
import volume from "../films/alexvolume.mp4";
import hikaru from "../films/hikaru.mp4";
import poker from "../films/poker.mp4";
import girl from "../films/girl.mp4";

export default function TikTokVideos() {
  return (
    <>
      <div
        className="flex w-full px-4 justify-center overflow-hidden p-10 min-h-[150px]
        lg:items-end lg:px-0 lg:justify-center lg:h-[400px] lg:min-h-[712px] "
      >
        <video
          src={alex}
          autoPlay
          muted
          loop
          className="  w-[120px] translate-x-28 rounded-xl
           z-0 lg:w-[225px] lg:rounded-3xl  lg:translate-x-0 lg:h-[400px] lg:translate-y-[100px] "
        ></video>
        <video
          src={hikaru}
          autoPlay
          muted
          loop
          className="  w-[120px] translate-y-14 rounded-xl z-10 
          lg:-translate-x-0 lg:rounded-3xl  lg:h-[450px] lg:w-[245px]  "
        ></video>
        <video
          src={volume}
          autoPlay
          muted
          loop
          className="  w-[120px] translate-y-6 -translate-x-5  rounded-xl 
          z-20 lg:w-[247px]  lg:h-[440px] lg:-translate-x-0  lg:translate-y-32 lg:rounded-3xl"
        ></video>
        <video
          src={gary}
          autoPlay
          muted
          loop
          className="  w-[120px] translate-y-12 -translate-x-10 
          rounded-xl z-30 lg:rounded-3xl lg:w-[255px]  lg:h-[450px] lg:-translate-x-0 "
        ></video>
        <video
          src={girl}
          autoPlay
          muted
          loop
          className=" w-[120px] lg:rounded-3xl lg:h-[400px] -translate-y-2 -translate-x-14 
          rounded-xl lg:w-[225px] lg:translate-x-0 lg:translate-y-28"
        ></video>
        <video
          src={poker}
          autoPlay
          muted
          loop
          className=" w-[120px] lg:rounded-3xl lg:h-[420px] translate-y-12 -translate-x-28 rounded-xl 
          lg:w-[237px] lg:-translate-x-0 lg:translate-y-24 "
        ></video>
      </div>
    </>
  );
}
