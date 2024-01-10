import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center p-4 bg-navigation z-40">
      <div className="font-signature">
        <h1 className="flex items-center justify-center text-5xl cursor-pointer">
          Lisa
        </h1>
        <p className="text-3xl cursor-pointer">Aspiring To Achieve</p>
      </div>

      {/*menu*/}

      <ul className="hidden md:hidden lg:flex">
        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="portfolio" smooth={true} duration={500}>
            Projects
          </Link>
        </li>

        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="articles" smooth={true} duration={500}>
            Articles
          </Link>
        </li>

        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="achievements" smooth={true} duration={500}>
            Achievements
          </Link>
        </li>

        <li className="hover:underline-offset-4 hover:underline decoration-black">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="lg:hidden z-10">
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
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          <Link
            onClick={handleClick}
            to="portfolio"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>

        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          <Link
            onClick={handleClick}
            to="articles"
            smooth={true}
            duration={500}
          >
            Articles
          </Link>
        </li>

        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          <Link
            onClick={handleClick}
            to="achievements"
            smooth={true}
            duration={500}
          >
            Achievements
          </Link>
        </li>

        <li className="py-6 text-4xl hover:underline-offset-4 hover:underline decoration-black">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
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
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 text-white border-b border-b-white">
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
