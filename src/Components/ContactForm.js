import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_8sqf1vw";
const TEMPLATE_ID = "template_d6wk5n6";
const USER_ID = "BGl475X9RsMvOJauA";

const handleOnSubmit = (e) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
    (result) => {
      console.log(e.target);
      console.log(result.text);
      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
      });
    },
    (error) => {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Ooops, something went wrong",
        text: error.text,
      });
    }
  );
  e.target.reset();
};

export default function ContactForm() {
  return (
    <div id="contact" className=" bg-black w-full h-[1200px] mt-20'">
      <div className="p-12 w-full h-[1200px] flex flex-col items-center ">
        <div className="relative z-0"></div>
        <h2
          className=" mt-20 text-white font-semibold text-[41px] leading-[43px] 
        pb-16 z-10 pt-14 lg:text-[72px] lg:leading-[80px] relative"
        >
          <div className=" absolute -z-10 top-0 left-0 w-32 h-32 bg-cyan-600 rounded-full filter blur-2xl  animate-blob   "></div>
          <div className=" absolute -z-10 top-4 left-16 w-32 h-32 bg-cyan-300 rounded-full filter blur-2xl animate-blob animation-delay-2000 "></div>
          Let's talk about Your <span className=" text-cyan-400 ">channel</span>{" "}
        </h2>
        <div className="flex items-center text-white text-lg">
          <AiOutlineMail className=" mr-5 text-cyan-400" />
          <a href="mailto:kuba@imoviemakers.com">kuba@imoviemakers.com</a>
        </div>

        <div className="bg-white p-7 rounded-lg mt-14 lg:max-w-[1200px] lg:min-w-[700px]">
          <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
            <label className="text-cyan-600 font-semibold">Your name</label>
            <input
              type="text"
              className="border p-2"
              placeholder="Name"
              name="from_name"
            ></input>

            <label className="text-cyan-600 font-semibold">Mail</label>
            <input
              type="email"
              className="border p-2"
              placeholder="Mail"
              name="reply_to"
            ></input>

            <label className="text-cyan-600 font-semibold">Message</label>
            <textarea
              type="text"
              className="border p-4 pt-2 pl-2"
              placeholder="Message"
              name="message"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="text-white self-center w-[180px] rounded-lg px-2 py-4 m-11  font-sans font-semibold
                     bg-cyan-600 hover:border-cyan-200 hover:border hover:text-cyan-400 hover:scale-110 duration-300"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
