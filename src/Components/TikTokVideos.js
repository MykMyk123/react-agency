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
      <div className="flex w-full px-4 justify-center overflow-hidden p-10 min-h-[150px]">
        <video
          src={alex}
          autoPlay
          muted
          loop
          className="  max-w-[120px] translate-x-28  rounded-xl z-0"
        ></video>
        <video
          src={hikaru}
          autoPlay
          muted
          loop
          className="  max-w-[120px] translate-y-14 rounded-xl z-10"
        ></video>
        <video
          src={volume}
          autoPlay
          muted
          loop
          className="  max-w-[120px] translate-y-6 -translate-x-5 rounded-xl z-20"
        ></video>
        <video
          src={gary}
          autoPlay
          muted
          loop
          className="  max-w-[120px] translate-y-12 -translate-x-10 rounded-xl z-30"
        ></video>
        <video
          src={girl}
          autoPlay
          muted
          loop
          className="  max-w-[120px] -translate-y-2 -translate-x-14 rounded-xl"
        ></video>
        <video
          src={poker}
          autoPlay
          muted
          loop
          className="  max-w-[120px] translate-y-12 -translate-x-28 rounded-xl"
        ></video>
      </div>
    </>
  );
}
