import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-200 py-16 pt-20"
    >
      <div className="flex flex-col justify-center items-center p-16">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2 mt-3">
          About Me
        </h1>
        <p className="max-w-[400px] sm:max-w-[700px] sm:text-xl font-semibold py-4">
          Taking a step aside from a career in hospitality, and then caring my
          journey to coding started as an escape from homeschooling during the
          first covid lockdown. My thirst for knowledge from my first encounter
          with coding led me to a bootcamp and then onto a full stack web
          development diploma. As a full time mum my determination to succeed
          will hopefully show my children that hard work and perserverance for
          something you love will win through and give them a good work ethic.
          The skills I have learnt from owning my own pizza takeaway, being a
          carer both to the elderly and 2 of my disabled step children stands me
          in good stead for the challenges of a career change into the world of
          technology that continues to evolve and keep us all on our toes.
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
