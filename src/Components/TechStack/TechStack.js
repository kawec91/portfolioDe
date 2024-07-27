import React from "react";
import htmlIcon from "../../Assets/TechStackIcons/htmlIcon.png";
import cssIcon from "../../Assets/TechStackIcons/cssIcon.png";
import jsIcon from "../../Assets/TechStackIcons/JavaScriptIcon.png";
import flutterIcon from "../../Assets/TechStackIcons/flutterIcon.png";
import nodeIcon from "../../Assets/TechStackIcons/nodeIcon.png";
import reactIcon from "../../Assets/TechStackIcons/reactIcon.png";
import tailwindIcon from "../../Assets/TechStackIcons/icons8-tailwind-css-64.png";
import bootstrapIcon from "../../Assets/TechStackIcons/bootstrapIcon.png";
import TechStackCard from "../TechStackCard/TechStackCard";

export default function TechStack() {
  const techStackList = [
    {
      id: 101,
      name: "HTML5",
      icon: htmlIcon,
    },
    {
      id: 102,
      name: "CSS3",
      icon: cssIcon,
    },
    {
      id: 103,
      name: "JavaScript",
      icon: jsIcon,
    },
    {
      id: 104,
      name: "Flutter",
      icon: flutterIcon,
    },
    {
      id: 105,
      name: "React.js",
      icon: reactIcon,
    },
    {
      id: 106,
      name: "Bootstrap",
      icon: bootstrapIcon,
    },
    {
      id: 107,
      name: "Node.js",
      icon: nodeIcon,
    },
    {
      id: 108,
      name: "Tailwind",
      icon: tailwindIcon,
    },
  ];
  return (
    <section className="w-full min-h-full bg-white flex flex-col items-center gap-4 pb-8">
      <h3 className="text-4xl uppercase font-bold pt-16 pb-4">TechStack</h3>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:w-3/4 xl:w-1/2 lg:gap-2">
          {techStackList.map((item) => (
            <TechStackCard key={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
