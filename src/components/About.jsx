import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500 py-6"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2 mt-3">
          About Me
        </h1>
        <p className="max-w-[400px] sm:max-w-[700px] sm:text-xl font-semibold py-4">
          I am a junior full stack developer, I started with my journey to
          coding in 2020 as an escape from homeschooling in the evening during
          the first covid lockdown. I have a thirst for knowlege and so took a
          bootcamp, after looking for a bit of direction to a new career change
          I took a diploma in full stack web development. I am particularly
          interested in front end development as I love to see the final result.
        </p>
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2">
          Technologies I use
        </h1>
        {/*menu*/}
        <div className="flex flex-col sm:text-lg item-center justify-between mx-auto space-y-4 md:flex-row md:space-y-0 md:space-x-12 md:mt-6 md:items-start">
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="flex flex-col items-center md:items-start md:mt-6">
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Python</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="underline decoration-solid underline-offset-4 font-semibold">
              Databases
            </h2>
            <div className="flex flex-col items-center md:items-start">
              <p className="md:mt-2">Postgres</p>
              <p>SQL</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="underline decoration-solid underline-offset-4 font-semibold">
              Frameworks
            </h2>
            <div className="flex flex-col items-center md:items-start">
              <p className="md:mt-2">React</p>
              <p>Typescript</p>
              <p>Tailwindcss</p>
              <p>Django</p>
              <p>Bootstrap</p>
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="underline decoration-solid underline-offset-4 font-semibold">
              Version control
            </h2>
            <div className="flex flex-col items-center md:items-start">
              <p className="md:mt-2">Git</p>
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
