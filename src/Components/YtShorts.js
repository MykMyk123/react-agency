import React from "react";
import { useInView } from "react-intersection-observer";

export default function YtShorts() {
  const [text1, isVisible] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [text2, isVisible2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [text3, isVisible3] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [text4, isVisible4] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [text5, isVisible5] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [text6, isVisible6] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <div className=" bg-black w-full max-h-[1600px] lg:max-h-[4500px] lg:pt-[150px] ">
        <div className="w-full p-7 py-12 h-full flex  flex-col items-center  ">
          <h1
            className={
              " text-white text-5xl font-semibold py-10 leading-[60px] lg:text-[100px] lg:leading-[100px] lg:pb-[120px] lg:text-center "
            }
          >
            Shorts will finally earn You{" "}
            <span className=" text-cyan-400">money</span>
          </h1>
          <div
            className=" bg-cyan-800 mb-10 leading-[45px] text-[40px] p-5
               benefit-size  rounded-3xl drop-shadow-2xl
                lg:text-[125px] lg:leading-[145px] lg:max-w-[1400px]
                lg:max-h-[4200px] lg:pb-10"
          >
            <p
              className={
                isVisible
                  ? "text-white transition-all  duration-700 translate-y-0 opacity-100"
                  : " opacity-0 translate-y-12 text-white"
              }
              ref={text1}
            >
              Starting February 1, 2023, all creators in YouTube Partner Program
            </p>
            <br />
            <p
              className={
                isVisible2
                  ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                  : " opacity-0 translate-y-32 "
              }
              ref={text2}
            >
              will become eligible for revenue sharing on ads
            </p>
            <br />
            <p
              className={
                isVisible3
                  ? "text-white transition-all delay-500 duration-700 translate-y-0 opacity-100"
                  : " opacity-0 translate-y-32 "
              }
              ref={text3}
            >
              that are viewed between Shorts in the Shorts Feed.
            </p>
            <br />

            <p className="text-white">
              <p
                className={
                  isVisible6
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text6}
              >
                It's a revolution for short creators.
              </p>
              <br />
              <p
                className={
                  isVisible4
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text4}
              >
                They will be able to monetize their shorts.
              </p>
              <br />
              {/* <p
                className={
                  isVisible5
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text5}
              >
                We are paid according to how good we did our job.
              </p> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
