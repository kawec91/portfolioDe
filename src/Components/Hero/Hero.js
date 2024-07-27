import React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center relative min-h-screen max-w-full"
      id="home"
    >
      <div className="flex items-center justify-center relative w-full max-w-[500px]">
        <div className="absolute z-10">
          <p className="text-xl md:text-3xl text-white ">
            Talk is cheap. Show me the code.
          </p>
          <div className="text-end">
            <span className="text-gray-100">~ Linus Torvalds</span>
          </div>
        </div>
        <div className="h-72 w-72 bg-purple-500/50 rounded-full absolute top-1/2 -translate-y-1/2 left-4 filter mix-blend-multiply blur-xl opacity-70"></div>
        <div className="h-72 w-72 bg-pink-500/50 rounded-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 filter mix-blend-multiply blur-xl opacity-70"></div>
        <div className="h-72 w-72 bg-orange-500/50 rounded-full absolute top-1/2 -translate-y-1/2 right-4 filter mix-blend-multiply blur-xl opacity-70"></div>
      </div>
    </section>
  );
}
