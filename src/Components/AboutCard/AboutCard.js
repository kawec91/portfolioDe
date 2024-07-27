import React from "react";

export default function AboutCard() {
  return (
    <div className="p-4 bg-white w-full lg:w-3/4 xl:w-1/2">
      <div className="p-4 md:p-9 border border-black gap-4 lg:grid lg:grid-cols-2 lg:w-full">
        <table className="col-span-2">
          <tbody>
            <tr>
              <td>
                <p>
                  <span className="text-blue-600">const</span>{" "}
                  <span className="text-blue-800">developer</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-pink-600">{`{`}</span>
                </p>
              </td>
              <td className="px-4">
                <p>
                  <span className="text-blue-400">vorname:</span>{" "}
                  <span className="text-orange-700">"Lukasz"</span>
                  <span className="text-gray-400">,</span>{" "}
                </p>
                <p>
                  <span className="text-blue-400">nachname:</span>{" "}
                  <span className="text-orange-700">"Lukawczyk"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-blue-400">strasse:</span>{" "}
                  <span className="text-orange-700">"Eintrachtstr. 21"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-blue-400">plz:</span>{" "}
                  <span className="text-lime-400">42275</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-blue-400">stadt:</span>{" "}
                  <span className="text-orange-700">"Wuppertal"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-blue-400">e-mail:</span>{" "}
                  <span className="text-orange-700">
                    "lukasz.lukawczyk@gmail.com"
                  </span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-blue-400">mobile:</span>{" "}
                  <span className="text-orange-700">"+4915734548082"</span>
                  <span className="text-gray-400">,</span>
                </p>
              </td>
              <td>
                <span className="text-pink-600">{`}`}</span>
                <span className="text-gray-400">;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
