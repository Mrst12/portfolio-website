import React from "react";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-cyan-50 pt-10 pb-16">
      <div className="max-w-[1500px] mx-auto px-4 flex flex-col items-center justify-center h-full md:flex-row">
        <div>
          <img
            src={profile}
            alt="profile"
            className="mt-36 mb-10 mx-auto w-2/3 rounded-full border-2 border-cyan-700 shadow-lg shadow-cyan-700"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-2xl sm:text-4xl font-bold">Lisa Tinmurth</h1>
          <h2 className="text-xl sm:text-3xl font-bold">
            Full Stack Developer
          </h2>
          <p className="max-w-[700px] sm:text-xl font-semibold py-4">
            I'm a full stack web developer, particularly interested in front end
            development. What magic can be created with JavaScript, React and
            TailwindCSS its certainly where my passions lie seeing something
            come from nothing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
