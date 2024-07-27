import React from "react";
import HeaderMenuItem from "../HeaderMenuItem/HeaderMenuItem";

export default function Header() {
  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Portfolio", path: "#gallery" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <>
      <header className="bg-white/60 filter fixed top-4 left-1/2 -translate-x-1/2 px-4 rounded-full z-20 shadow-sm shadow-black/40">
        <ul className="flex items-center justify-center gap-2">
          {menuItems.map((item) => (
            <HeaderMenuItem name={item.name} path={item.path} key={item.path} />
          ))}
        </ul>
      </header>
    </>
  );
}
