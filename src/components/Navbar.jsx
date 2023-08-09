import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center p-4 bg-navigation">
      <div className="font-signature">
        <h1 className="flex items-center justify-center text-5xl cursor-pointer">
          Lisa
        </h1>
        <p className="text-3xl cursor-pointer">Aspiring To Achieve</p>
      </div>

      {/*menu*/}

      <ul className="hidden md:flex">
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          Home
        </li>
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          About
        </li>
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          Portfolio
        </li>
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          Experience
        </li>
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          Contact
        </li>
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
        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          Home
        </li>
        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          About
        </li>
        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          Portfolio
        </li>
        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          Experience
        </li>
        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          Contact
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-t-md text-white border-b border-b-white">
            <a
              className="flex justify-between items-center w-full "
              href="https://www.linkedin.com/in/lisa-tinmurth/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] text-white border-b border-b-white">
            <a
              className="flex justify-between items-center w-full "
              href="https://github.com/Mrst12"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] text-white border-b border-b-white">
            <a
              className="flex justify-between items-center w-full "
              href="mailto:LisaTinmurth@hotmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] rounded-b-md text-white">
            <a
              className="flex justify-between items-center w-full "
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download={true}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
