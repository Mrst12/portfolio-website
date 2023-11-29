import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-navigation w-screen flex justify-center">
        <div className="md:w-full w-1/2">
          <div className="p-10 text-center">
            <p className="mb-4">Designed and developed by</p>

            <div className="h-1 border-2 border-cyan-700 border-dotted"></div>

            <div className="flex text-white w-full justify-between py-3">
              <a
                className="hover:bg-hoveron p-1 md:p-4 rounded-md"
                href="https://www.linkedin.com/in/lisa-tinmurth/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                className="hover:bg-hoveron p-1 md:p-4 rounded-md"
                href="https://github.com/Mrst12"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                className="hover:bg-hoveron p-1 md:p-4 rounded-md"
                href="mailto:LisaTinmurth@hotmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
              <a
                className="hover:bg-hoveron p-1 md:p-4 rounded-md"
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                download={true}
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </div>

            <div className="h-1 border-2 border-cyan-700 border-dotted"></div>

            <p className="mt-4">Lisa Tinmurth</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
