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
        <div className="w-full p-7 py-12 h-full flex items-center flex-col  ">
          <h1
            className={
              " text-white text-5xl font-semibold py-10 leading-[60px] lg:text-[100px] lg:leading-[100px] lg:pb-[120px] "
            }
          >
            Pay <span className=" text-cyan-400">only</span> when You get views.
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
              We get paid in the CPM model.
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
              You pay a certain fee for 1000 views from shorts we edited.
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
              The fee varies, depending on the channel.
            </p>
            <br />

            <p className="text-white">
              <p
                className={
                  isVisible4
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text4}
              >
                It's a win win situation.
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
                You are assured to not overpay and get the best edit possible.
              </p>
              <br />
              <p
                className={
                  isVisible5
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text5}
              >
                We are paid according to how good we did our job.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
