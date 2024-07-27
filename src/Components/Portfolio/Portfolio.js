import React from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import tailGrund from "../../Assets/Images/tailwindGrundlagen.png";
import nachbauImg from "../../Assets/Images/nachbau.png";
import gridImg from "../../Assets/Images/GridUebung.png";
import wocheProject from "../../Assets/Images/htmlCssWochenAufgabe.png";
import porProject from "../../Assets/Images/portfolio.png";
import abProject from "../../Assets/Images/abProject.png";

export default function Portfolio() {
  const worksList = [
    {
      id: 1,
      name: "Grid Grundlagen",
      image: gridImg,
      tech: ["HTML", "CSS"],
      link: "",
    },
    {
      id: 2,
      name: "Tailwind Einführung",
      image: tailGrund,
      tech: ["HTML", "CSS", "Tailwind"],
      link: "",
    },
    {
      id: 3,
      name: "Nachbau Uebung",
      image: nachbauImg,
      tech: ["HTML", "CSS"],
      link: "",
    },
    {
      id: 4,
      name: "HTML und CSS 1-Woche Projekt",
      image: wocheProject,
      tech: ["HTML", "CSS"],
      link: "",
    },
    {
      id: 5,
      name: "Abschluss Project",
      image: abProject,
      tech: ["JavaScript", "React.js", "Tailwind", "Node.js", "Sqlite3"],
      link: "",
    },
    {
      id: 6,
      name: "Portfolio Seite",
      image: porProject,
      tech: ["JavaScript", "React.js", "Tailwind"],
      link: "",
    },
  ];
  return (
    <section
      className="min-h-full max-w-full flex flex-col items-center justify-center gap-2 "
      id="gallery"
    >
      <h3 className="text-4xl uppercase font-bold pt-16 pb-2">Portfolio</h3>
      <div className="flex flex-wrap justify-center items-center gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 lg:w-3/4 xl:w-1/2">
        {worksList.map((item) => (
          <PortfolioCard object={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
