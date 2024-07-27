import React from "react";

export default function TechStackCard({ name, icon }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-gray-200 p-4 rounded-lg">
      <img src={icon} alt="Programming-Language" />
      <h3 className="font-bold uppercase">{name}</h3>
    </div>
  );
}
