import React, { useEffect, useState } from "react";
import garyContent from "../films/gary-content.mp4";
import { useInView } from "react-intersection-observer";

export default function LetsGoViral() {
  const [counter, setCounter] = useState(0);

  const [counterview, isVisible] = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  useEffect(() => {
    if (isVisible) {
      const id = setInterval(() => {
        setCounter((prev) => {
          if (prev == 19) {
            setCounter(19);
            clearInterval(id);
          } else {
            return prev + 1;
          }
        });
      }, 100);
    }
  }, [isVisible]);

  return (
    <>
      <div className=" bg-black w-full h-[1700px] ">
        <div className="p-12 w-full h-[1580px] py-16">
          <div className="relative z-0">
            <div className=" absolute top-0 left-2 w-48 h-48 bg-cyan-600 rounded-full filter blur-2xl  animate-blob   "></div>
            <div className=" absolute top-0 right-2 w-48 h-48 bg-cyan-400 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
          </div>

          <h2 className="text-white font-semibold text-5xl leading-[60px] py-16 z-10 relative ">
            Let's go viral <span className=" text-cyan-400 ">together</span>{" "}
          </h2>
          <p className="text-white text-xl z-10 relative mb-20 ">
            Shorts have a far better organic reach potential than long videos.
            That means they can very easily go viral and bring You new
            subscribers. Moreover, You are exposed to a new big audience on
            YouTube Shorts, TikTok and Instagram Reels.
          </p>

          <video
            src={garyContent}
            autoPlay
            muted
            loop
            className="rounded-xl my-11"
          ></video>

          <div className="arrowAnim">
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>

          <p ref={counterview} className="text-white text-[100px]">
            {counter}m <span className="text-xl text-cyan-400">views</span>
          </p>
        </div>

        <div className=" flex justify-center items-center ">
          <button
            className=" z-10  text-white rounded-3xl px-8 py-4   font-sans font-semibold
                     bg-cyan-400 hover:border-cyan-200 hover:border hover:text-cyan-200 hover:scale-110 duration-300"
          >
            <a>Contact us</a>
          </button>
        </div>
      </div>
    </>
  );
}
