import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-navigation">
      <div className="font-signature">
        <h1 className="flex items-center justify-center text-5xl cursor-pointer">
          Lisa
        </h1>
        <p className="text-3xl cursor-pointer">Aspiring To Achieve</p>
      </div>

      {/*menu*/}
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>

      {/*Hamburger*/}
      <div></div>

      {/*mobile menu */}
      <div></div>
    </div>
  );
};

export default Navbar;
