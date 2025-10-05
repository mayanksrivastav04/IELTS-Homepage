import React, { useState } from "react";
import logo from "../assets/IELTS_logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  const [isopen, setIsopen] = useState(false);

  function toggleMenu() {
    setIsopen(!isopen);
  }

  return (
    <nav className="border-solid border-b-2 border-red-300 p-4 flex justify-between items-center">
      <img src={logo} className="h-12" />
      <div className="border-black hidden md:block">
        <ul className="flex gap-8 text-xl">
          <li>
            <a href="#home" className="text-[#C7002B] underline hover:text-[#C7002B] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-[#C7002B] transition">
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-[#C7002B] transition">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#C7002B] transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center ">
        <button className="bg-[#C7002B] text-white px-4 py-2 rounded-md flex items-center gap-2 active:scale-95 cursor-pointer hover:bg-red-700">
          Get Started
          <MdOutlineArrowOutward />
        </button>
        <RiMenu3Line onClick={toggleMenu} className="md:hidden text-2xl" />
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg p-4 md:hidden ${
          isopen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end">
          <RiCloseLine
            onClick={toggleMenu}
            className="cursor-pointer text-2xl"
          />
        </div>

        <ul className="flex flex-col gap-6 text-lg mt-8">
          <li onClick={toggleMenu}>
            <a href="#home">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#features">Features</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
