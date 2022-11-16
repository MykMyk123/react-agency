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
      <div className=" bg-cyan-800 w-full h-[1350px] ">
        <div className="w-full p-7 py-12 h-full flex items-center flex-col ">
          <h1 className=" text-white text-6xl font-semibold py-10">
            How do You benefit?
          </h1>
          <div className=" bg-black mb-10 p-7 benefit-size rounded-3xl drop-shadow-2xl">
            <div>
              <p
                className={
                  isVisible
                    ? "text-white transition-all  duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-12 "
                }
                ref={text1}
              >
                We transform
              </p>
              <p
                className={
                  isVisible2
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text2}
              >
                Your already
                <br /> existing
                <br /> long-form
                <br />
                videos
              </p>
              <p
                className={
                  isVisible3
                    ? "text-white transition-all delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text3}
              >
                into highly
                <br /> engaging
                <br /> <span className=" text-cyan-400">shorts.</span>
                <br />
              </p>
            </div>
            <p className="text-white">
              <p
                className={
                  isVisible4
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text4}
              >
                It results
                <br /> in boosting
              </p>
              <p
                className={
                  isVisible5
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text5}
              >
                Your longer
                <br /> format
              </p>
              <p
                className={
                  isVisible6
                    ? "text-white transition-all  delay-500 duration-700 translate-y-0 opacity-100"
                    : " opacity-0 translate-y-32 "
                }
                ref={text6}
              >
                and <span className=" text-cyan-400"> maximazing</span>
                <br />
                Your potential as
                <br /> a creator.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
