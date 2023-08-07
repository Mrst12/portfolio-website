import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-navigation">
      <div className="font-signature">
        <h1 className="flex items-center justify-center text-5xl cursor-pointer">
          Lisa
        </h1>
        <p className="text-3xl cursor-pointer">Aspiring To Achieve</p>
      </div>

      {/*menu*/}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-navigation flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/*social icons*/}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
