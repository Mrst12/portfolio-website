import React from "react";
import sickChildrensTrust from "../assets/portfolio/sick-childrens-trust-project.png";
import quizzical from "../assets/portfolio/quizzical-project.png";
import shopApp from "../assets/portfolio/shop-app-project.png";
import stepParentsUnite from "../assets/portfolio/step-parents-unite-project.png";
import appyFamilies from "../assets/portfolio/appy-families-project.png";
import misterT from "../assets/portfolio/mister-ts-website.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: sickChildrensTrust,
    },
    {
      id: 2,
      src: quizzical,
    },
    {
      id: 3,
      src: shopApp,
    },
    {
      id: 4,
      src: stepParentsUnite,
    },
    {
      id: 5,
      src: appyFamilies,
    },
    {
      id: 6,
      src: misterT,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="">
          <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2 mt-3">
            My Projects
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg">
              <img src={src} alt="" className="rounded-md" />
              <div>
                <button>Demo</button>
                <button>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
