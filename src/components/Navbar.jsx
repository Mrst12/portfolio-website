import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-navigation">
      <div className="font-signature">
        <h1 className="flex items-center justify-center text-5xl cursor-pointer">
          Lisa
        </h1>
        <p className="text-3xl cursor-pointer">Aspiring To Achieve</p>
      </div>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
