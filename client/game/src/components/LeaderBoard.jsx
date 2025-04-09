import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LeaderBoard = () => {
    const scores = ["Alice - 1500", "Bob - 1200", "Charlie - 1000"];
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col text-white">
      <NavBar />
      <div className="flex flex-col "></div>
      <div className="bg-blue-500 flex  flex-col items-start justify-start max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-24">
        <h1 className="font-extrabold text-5xl text-blue-500 p-4 bg-slate-100 rounded-2xl w-full">
          Leader Board
        </h1>

        <div className="flex items-start mt-10 bg-slate-100 w-full rounded-2xl text-white">
          <ul className="p-4 w-full flex flex-col gap-2">
            {scores.map((score, index) => (
              <li key={index} className="bg-blue-500 rounded-2xl p-3">
                {index + 1}. {score}
                </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeaderBoard;
