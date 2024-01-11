import React from "react";
import pythonBootcamp from "../assets/certificates/python-bootcamp.jpg";
import webDev from "../assets/certificates/web-dev-cert.jpg";
import sql from "../assets/certificates/sql-mimo.jpg";
import python from "../assets/certificates/python-mimo.jpg";
import webBootcamp from "../assets/certificates/web-dev-bootcamp.jpg";
import htmlTraining from "../assets/certificates/html-cert.jpg";
import typescript from "../assets/certificates/typescript.jpg";
import assessment from "../assets/certificates/assessment-cert.jpg";
import bugFixing from "../assets/certificates/bug-fixing-cert.jpg";
import diploma from "../assets/certificates/diploma-cert.jpg";
import java from "../assets/certificates/java-cert.jpg";
import machineLearning from "../assets/certificates/machine-learning.jpg";
import pythonMooc from "../assets/certificates/python-mooc.jpg";
import tailwind from "../assets/certificates/tailwind.jpg";

const Achievements = () => {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development Diploma",
      image: diploma,
    },
    {
      id: 2,
      title: "Web development",
      image: webDev,
    },
    {
      id: 3,
      title: "SQL",
      image: sql,
    },
    {
      id: 4,
      title: "Python",
      image: python,
    },
    {
      id: 5,
      title: "Complete 2021 Web Development Bootcamp",
      image: webBootcamp,
    },
    {
      id: 6,
      title: "HTML Essential Training",
      image: htmlTraining,
    },
    {
      id: 7,
      title: "Understanding Typescript",
      image: typescript,
    },
    {
      id: 8,
      title: "Assessment",
      image: assessment,
    },
    {
      id: 9,
      title: "Bug Fixing",
      image: bugFixing,
    },
    {
      id: 10,
      title: "Complete Python Bootcamp",
      image: pythonBootcamp,
    },
    {
      id: 11,
      title: "Java",
      image: java,
    },
    {
      id: 12,
      title: "Machine Learning",
      image: machineLearning,
    },
    {
      id: 13,
      title: "Python",
      image: pythonMooc,
    },
    {
      id: 14,
      title: "Tailwind From Scratch",
      image: tailwind,
    },
  ];
  return (
    <div name="achievements" className="w-full h-full py-6 pt-20">
      <div className="flex items-center justify-center">
        <h1 className="underline decoration-solid underline-offset-4 text-xl sm:text-4xl font-bold mb-12 mt-16">
          Achievements
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {certificates.map(({ id, title, image }) => (
          <>
            <div
              key={id}
              className="rounded-lg p-12 md:px-0 border border-cyan-600 justify-center items-center m-6"
            >
              <div className="flex rounded-md h-52 justify-center">
                <img
                  src={image}
                  alt="project pictures"
                  className="rounded-md border border-cyan-600"
                />
              </div>
              <div className="flex justify-center mt-6">
                <p>{title}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
