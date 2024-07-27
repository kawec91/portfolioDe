import React from "react";
import TechStackPill from "../TechStackPill/TechStackPill";

export default function PortfolioCard({ object }) {
  return (
    <div className="p-4 bg-white rounded flex flex-col gap-2 w-full h-full">
      <img
        src={object.image}
        alt="Card"
        className="w-full h-52 lg:h-64 bg-black object-contain border border-black"
      />
      <div className="flex flex-col gap-4 items-center">
        <h5>{object.name}</h5>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {object.tech.map((item) => (
            <TechStackPill name={item} key={`${item.name}-${item}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
