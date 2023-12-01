import React from "react";

const Articles = () => {
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
      name="articles"
      className="w-full h-full bg-gradient-to-b
  from-cyan-100 to-cyan-500 pt-16 pb-32"
    >
      <div className="flex items-center justify-center p-6 pt-20">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-2 mt-6">
          Articles
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {articles.map(({ id, webpage, title }) => (
          <>
            <div
              key={id}
              className="hover:bg-navigation text-xl md:text-lg flex w-[77%] mx-auto rounded-lg p-12 md:px-0 border border-cyan-600 justify-center items-center m-6 bg-cyan-200"
            >
              <a target="_blank" rel="noreferrer" href={webpage}>
                {title}
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Articles;
