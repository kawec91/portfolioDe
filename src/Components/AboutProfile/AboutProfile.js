import React from "react";
import chefPhoto from "../../Assets/Images/ll.jpg";
import { Link } from "react-router-dom";

export default function AboutProfile() {
  return (
    <div className="bg-white p-4 grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 xl:w-1/2">
      <div className="border border-black p-4 md:p-8 gap-8 row-span-2 md:col-span-2 flex flex-col md:flex-row">
        <div className="flex flex-row md:flex-col items-center justify-center gap-2">
          <img
            src={chefPhoto}
            alt="profile"
            className="rounded-full w-36 h-36 bg-black object-cover object-left"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <a href="https://github.com/kawec91" target="blank">
              <button className="px-4 py-2 bg-red-500 min-w-36 rounded text-white font-bold">
                GitHub
              </button>
            </a>
            <Link
              to="/files/lukaszlukawczykLebenslauf.pdf"
              target="_blank"
              download
            >
              <button className="px-4 py-2 bg-red-500 min-w-36 rounded text-white font-bold">
                Lebenslauf
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-96 md:max-w-full break-words text-balance px-3 md:px-0 md:py-2">
          Hallo, ich heisse Lukasz Lukawczyk. Ich bin 32 Jahre alt vor 4 Jahren
          habe ich sich mit meiner Familie (Frau und Tochter) nach Wuppertal
          umgezogen. Frueher haben wir im Thorn, Polen gewohnt. Danach habe ich
          Deutsch Sprache Niveau B1 und B2 baestanden. Im vergangenheit habe ich
          paar Web seiten fuer mich selbst als hobby erstelen das hat mir viel
          Spass gemacht. Troztem habe ich nicht gedacht dass ich kann im zukunft
          auf diesem richtung gehen. Zum glueck Letztes Jahr habe ich ein
          Weiterbildung als Full-Stack Web Developer gemacht und ich habe eine
          grosse chance auf Arbeit im Hobby bereich. Aktuell suche ich eine
          mindenstens 2 Monate Praktikum platz aber ich bin voll von hoffnung
          auf weitere zusamenarbeit.
        </div>
      </div>
    </div>
  );
}
