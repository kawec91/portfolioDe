import React, { useEffect, useState } from "react";

export default function TechStackPill({ name }) {
  const [color, setColor] = useState();
  useEffect(() => {
    switch (name) {
      case "CSS":
        setColor("bg-blue-700");
        break;
      case "Tailwind":
        setColor("bg-blue-500");
        break;
      case "Bootstrap":
        setColor("bg-purple-700");
        break;
      case "JavaScript":
        setColor("bg-yellow-300");
        break;
      case "React.js":
        setColor("bg-green-400");
        break;
      case "Node.js":
        setColor("bg-green-700");
        break;
      default:
        setColor("bg-orange-500");
        break;
    }
  }, [name]);
  return (
    <div className="rounded-full flex bg-gray-200 px-4 py-2 items-center justify-center gap-2">
      <div className={`w-2 h-2 ${color}`}></div>
      <p>{name}</p>
    </div>
  );
}
