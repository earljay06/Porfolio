import React from "react";
import picture from "../assets/picture.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full pt-20">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right md:pb-40 pl-4 md:my-26">
            <p className="text-4xl font-bold inline border-b-4 border-amber-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 lg:px-12 p-4">
          <div className="sm:text-right text-4xl font-bold flex justify-center pt-6">
            <img
              src={picture}
              className="opacity-50 md:ml-20 w-full md:w-72 w-52"
              // style={{ width: "300px" }}
              alt=""
            />
          </div>
          <div className="mt-0 md:mt-10">
            <p className="font-bold text-2xl text-amber-500 flex justify-center md:justify-start items-center">
              Front-End Developer
            </p>
            <p className="mt-4 text-sm md:text-lg px-10 md:px-0">
              Front End-Web Developer that has the ability to adapt in both
              self-starting and collaborative environments while staying focused
              on achieving high-quality results under strict deadlines. Eager to
              obtain a challenging position any prestigious company that will
              expand my learning and build upon my developer skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
