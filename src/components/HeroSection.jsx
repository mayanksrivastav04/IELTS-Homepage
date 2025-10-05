import React from "react";
import heroBg from "../assets/hero-bg-image.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#F5F5F5] py-20">
      <div className="container mx-auto px-4 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            Achieve Your Dream IELTS Band Score
          </h1>
          <p className="text-gray-600 text-lg">
            Join 5000+ students who improved their English skills with
            personalized courses, mock tests, and AI band score prediction.
          </p>

          <div className="flex justify-center md:justify-start mt-4">
            <button className="bg-[#C7002B] text-white px-6 py-3 rounded-md text-lg hover:bg-red-700 transition active:scale-95 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroBg}
            alt="Hero Banner"
            className="w-full max-w-md mt-10 md:mt-0 rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
