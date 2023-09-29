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
      github: "https://github.com/Mrst12/sick-childrens-trust-portfolio",
      live: "https://mrst12.github.io/sick-childrens-trust-portfolio/",
    },
    {
      id: 2,
      src: quizzical,
      github: "https://github.com/Mrst12/Quizzical",
      live: "https://mrst12.github.io/Quizzical/",
    },
    {
      id: 3,
      src: shopApp,
      github: "https://github.com/Mrst12/shop-app",
      live: "https://shop-app-ne86.onrender.com/",
    },
    {
      id: 4,
      src: stepParentsUnite,
      github: "https://github.com/Mrst12/step-parents-unite",
      live: "https://step-parents-unite.onrender.com/",
    },
    {
      id: 5,
      src: appyFamilies,
      github: "https://github.com/Mrst12/pp5-frontend-react-appy-families",
      live: "https://appy-families.onrender.com/",
    },
    {
      id: 6,
      src: misterT,
      github: "https://github.com/Mrst12/mister-t-upvc",
      live: "https://mistertsupvc.netlify.app/",
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
          {portfolios.map(({ id, src, github, live }) => (
            <div key={id} className="rounded-lg">
              <img src={src} alt="" className="rounded-md w-full h-52" />
              <div>
                <a href={live} target="_blank" rel="noreferrer">
                  <button>Demo</button>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
