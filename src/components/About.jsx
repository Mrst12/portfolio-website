import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-cyan-100 to-cyan-500"
    >
      <div className="flex flex-col justify-center items-center w- full h-full">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">About Me</h1>
        <p className="max-w-[400px] sm:max-w-[700px] sm:text-xl font-semibold py-4">
          I am a junior full stack developer, I started with my journey to
          coding in 2020 as an escape from homeschooling in the evening during
          the first covid lockdown. I have a thirst for knowlege and so took a
          bootcamp, after looking for a bit of direction to a new career change
          I took a diploma in full stack web development. I am particularly
          interested in front end development as I love to see the final result.
        </p>
      </div>
    </div>
  );
};

export default About;
