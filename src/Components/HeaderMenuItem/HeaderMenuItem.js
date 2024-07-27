import React from "react";

export default function HeaderMenuItem({ name, path }) {
  return (
    <li className="p-2 hover:text-red-600">
      <a href={path}>{name}</a>
    </li>
  );
}
