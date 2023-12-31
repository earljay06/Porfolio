import React, { useRef, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Typed from "typed.js";
import Devs4 from '../assets/devs4.png'



const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span class="custom-underline inline border-b-2 border-amber-500">Front-End Developer!</span>',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    };

    typedRef.current = new Typed(".auto-input", options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:pl-0 md:pl-40">
        <p className="text-amber-500 font-bold text-2xl">Hi, This is</p>
        <h1 className="text-2xl lg:text-5xl md:text-2xl font-bold text-[#ccd6f6] mt-4">
          Earl Jay Juatchon
        </h1>
        <h2 className="text-xl lg:text-5xl md:text-2xl font-bold text-[#8892b0]">
          I'am a <span className="auto-input"></span>
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-500 hover:border-amber-500 mt-8">
            <p className="animate-bounce duration-200">Let's Talk</p>
            <span className="duration-300">
              {" "}
              {/* group-hover:rotate-90 */}
              <FaArrowDown className="ml-3 animate-bounce" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
