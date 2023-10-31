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
      description:
        "A site for families seeking a place to stay whilst their children are in hospital built using HTML and CSS",
    },
    {
      id: 2,
      src: quizzical,
      github: "https://github.com/Mrst12/Quizzical",
      live: "https://mrst12.github.io/Quizzical/",
      description: "An online quiz built using HTML, CSS and Javascript",
    },
    {
      id: 3,
      src: shopApp,
      github: "https://github.com/Mrst12/shop-app",
      live: "https://shop-app-ne86.onrender.com/",
      description:
        "A command line app built using python, useful for creating a shopping list",
    },
    {
      id: 4,
      src: stepParentsUnite,
      github: "https://github.com/Mrst12/step-parents-unite",
      live: "https://step-parents-unite.onrender.com/",
      description:
        "A blog site for step parents can come together for support, built using HTML, CSS, JavaScript and Django",
    },
    {
      id: 5,
      src: appyFamilies,
      github: "https://github.com/Mrst12/pp5-frontend-react-appy-families",
      live: "https://appy-families.onrender.com/",
      description:
        "A family planner application, built using  HTML, CSS, JavaScript, Python, Django and postgreSQL",
    },
    {
      id: 6,
      src: misterT,
      github: "https://github.com/Mrst12/mister-t-upvc",
      live: "https://mistertsupvc.netlify.app/",
      description:
        "A website for Mister t's UPVC shop built using HTML, and CSS.",
    },
  ];
  const articles = [
    {
      id: 1,
      webpage:
        "https://www.codu.co/articles/my-journey-into-the-tech-world-en-ysof7",
      title: "My journey into tech",
    },
    {
      id: 2,
      webpage: "https://www.codu.co/articles/using-flexbox-o0kpfvxc",
      title: "Using Flexbox",
    },
    {
      id: 3,
      webpage: "https://www.codu.co/articles/imposter-syndrome-bmuzzdxb",
      title: "Imposter Syndrome",
    },
    {
      id: 4,
      webpage: "https://www.codu.co/articles/tailwindcss-gk2l9xvd",
      title: "TailwindCSS",
    },
    {
      id: 5,
      webpage:
        "https://www.codu.co/articles/tailwindcss-layout-display-class-fi5wbcbf",
      title: "TailwindCSS: Layout: display-class",
    },
    {
      id: 6,
      webpage:
        "https://www.codu.co/articles/tailwindcss-responsive-design-sv_ghmut",
      title: "TailwindCSS: Responsive Design",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full h-full bg-gradient-to-b from-cyan-100 to-cyan-500 py-6"
    >
      <div className="justify-center items-center mx-auto w-[80%]">
        <div className="flex items-center justify-center">
          <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2">
            My Projects
          </h1>
        </div>

        {portfolios.map(({ id, src, github, live, description }) => (
          <>
            <div
              key={id}
              className="rounded-lg p-12 md:px-0 border border-cyan-600 justify-center items-center m-6 bg-cyan-200"
            >
              <div className="flex rounded-md h-52 justify-center">
                <img
                  src={src}
                  alt="project pictures"
                  className="rounded-md border border-cyan-600"
                />
              </div>
              <div className="flex justify-center mt-6">
                <p>{description}</p>
              </div>

              <div className=" flex items-center justify-center">
                <button className="p-4 border border-cyan-600 rounded-md bg-navigation m-4 hover:bg-hoveron">
                  <a href={live} target="_blank" rel="noreferrer">
                    Live site
                  </a>
                </button>

                <button className="p-4 border border-cyan-600 rounded-md bg-navigation m-4  hover:bg-hoveron">
                  <a href={github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2">
          Articles
        </h1>
      </div>
      {articles.map(({ id, webpage, title }) => (
        <>
          <div key={id}>
            <a target="_blank" rel="noreferrer" href={webpage}>
              {title}
            </a>
          </div>
        </>
      ))}
    </div>
  );
};

export default Portfolio;
