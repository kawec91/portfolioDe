import React from "react";

export default function ContactCard({ name, icon, contact, link }) {
  return (
    <div className="flex py-2 px-2 bg-gray-200 rounded cursor-pointer w-full hover:shadow-md hover:shadow-black/40 items-center gap-2">
      <a href={link} target="blank" className="flex items-center gap-2">
        <img src={icon} alt={`${name} icon`} />
        <div className="flex flex-col">
          <h5>{name}</h5>
          <p className="w-full">{contact}</p>
        </div>
      </a>
    </div>
  );
}
