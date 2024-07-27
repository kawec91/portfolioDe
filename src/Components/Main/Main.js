import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import TechStack from "../TechStack/TechStack";

export default function Main() {
  return (
    <main className="bg-gray-200 w-full max-w-full">
      <Hero />
      <About />
      <TechStack />
      {/* Hire */}
      <Portfolio />
      <Contact />
    </main>
  );
}
