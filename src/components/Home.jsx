import React, { useRef, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "typed.js";

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
    <div name="home" className="w-full h-screen bg-stone-900">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-amber-500 font-bold text-2xl">Hi, This is</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] mt-4">
          Earl Jay Juatchon
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          I'am a <span className="auto-input"></span>
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-500 hover:border-amber-500 mt-8">
            Let's Talk
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useRef } from "react";
// import blackbackground from "../assets/blackbackground.jpg";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import Typed from "typed.js";

// const Home = () => {
//   const typedRef = useRef(null);

//   useEffect(() => {
//     const options = {
//       strings: ['<span class="custom-underline">Front-End Developer!</span>'],
//       typeSpeed: 100,
//       backSpeed: 100,
//       backDelay: 2000,
//       loop: true,
//     };

//     // Initialize Typed.js on the 'I'am a' h1 element
//     typedRef.current = new Typed(".auto-input", options);

//     return () => {
//       if (typedRef.current) {
//         typedRef.current.destroy();
//       }
//     };
//   }, []);
//   return (
//     <div name="home" className="h-screen">
//       <img

//         alt=""
//       />
//       <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full absolute top-0 left-0 right-0 bottom-0">
//         <p className="text-amber-500 font-bold text-2xl">Hi, This is</p>
//         <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6]">
//           Earl Jay Juatchon
//         </h1>
//         <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
//           I'am a <span className="auto-input"></span>
//         </h2>

//         <div>
//           <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-amber-500 hover:border-amber-500 mt-8">
//             View Work
//             <span className="group-hover:rotate-90 duration-300">
//               <HiArrowNarrowRight className="ml-3 " />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
