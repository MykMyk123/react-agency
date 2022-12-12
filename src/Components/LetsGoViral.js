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
      <div className=" bg-black w-full h-[2200px] flex items-center flex-col lg:h-[1400px] ">
        <div
          className="p-12 w-full h-[1400px] py-16 items-center flex flex-col mb-10 lg:flex-row 
         lg:h-[800px] lg:max-w-[1500px] lg:pb-0"
        >
          <div className="items-center flex flex-col lg:items-start ">
            <h2
              className="text-white font-semibold text-5xl leading-[55px]
             py-16 z-20 relative lg:text-[72px] lg:leading-[80px] "
            >
              Let's go viral <span className=" text-cyan-400 ">together</span>{" "}
              <div className=" absolute -z-10 top-0 left-2 w-40 h-40 bg-cyan-600 rounded-full filter blur-2xl  animate-blob   "></div>
              <div className=" absolute -z-10 top-0 left-20 w-40 h-40 bg-cyan-400 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
            </h2>

            <p className="text-white text-xl z-10 relative mb-20 lg:pr-[180px] lg:text-[27px] lg:leading-[33px] ">
              Shorts have a far better organic reach potential than long videos.
              That means they can very easily go viral and bring You new
              subscribers. Moreover, You are exposed to a new big audience on
              YouTube Shorts, TikTok and Instagram Reels.
            </p>
          </div>
          <video
            src={garyContent}
            autoPlay
            muted
            loop
            className="rounded-xl my-11 md:w-[400px]  "
          ></video>
        </div>
        <div className="arrowAnim mt-7">
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

        <p ref={counterview} className="text-white text-[100px] mt-28 ">
          {counter}m <span className="text-xl text-cyan-400">views</span>
        </p>

        <div className=" flex justify-center items-center mt-16">
          <button
            className=" z-10 block text-white rounded-3xl px-8 py-4   font-sans font-semibold
                     bg-cyan-400 hover:border-cyan-200 hover:border lg:hidden hover:text-cyan-200 hover:scale-110 duration-300"
          >
            <a href="#contact">Contact us</a>
          </button>
        </div>
      </div>
    </>
  );
}
