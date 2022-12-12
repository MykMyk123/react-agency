import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <>
      <header className="bg-black flex justify-center ">
        <div className=" flex justify-between items-center px-4 h-36 lg:w-[1400px] ">
          <img src={logo} className=" w-64" />
          <button
            className=" lg:block hidden text-cyan-400 rounded-3xl border px-8 py-2 m-0 h-14 font-sans font-semibold
                     border-cyan-400 hover:border-cyan-200 hover:text-cyan-200 hover:scale-110 duration-300"
          >
            <a href="#contact">Contact Us</a>
          </button>
        </div>
      </header>
    </>
  );
}
