import React from "react";
import AboutCard from "../AboutCard/AboutCard";
import AboutProfile from "../AboutProfile/AboutProfile";

export default function About() {
  return (
    <section
      className="min-h-full max-w-full flex flex-col items-center justify-center gap-4 pb-8"
      id="about"
    >
      <h3 className="text-4xl uppercase font-bold pt-16 pb-2">About</h3>
      <AboutProfile />
      <AboutCard />
    </section>
  );
}
