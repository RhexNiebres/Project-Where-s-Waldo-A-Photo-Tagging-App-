import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { fetchPlayers } from "../apiServices/fetchPlayers"; // Assuming the fetchPlayers function is in the api.js file

const LeaderBoard = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const getPlayers = async () => {
      const result = await fetchPlayers();
      if (result.success) {
        setPlayers(result.players);
      } else {
        setError(result.error);
      }
    };

    getPlayers();
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen flex flex-col text-white">
      <NavBar />
      <div className="flex flex-col"></div>
      <div className="bg-blue-500 flex flex-col items-start justify-start max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-24">
        <h1 className="font-extrabold text-5xl text-blue-500 p-4 bg-slate-100 rounded-2xl w-full">
          Leader Board
        </h1>

        <div className="flex items-start mt-10 bg-slate-100 w-full rounded-2xl text-white">
          {players.length === 0 ? (
            <div className=" text-blue-500 flex justify-center items-center">
              Be the first to conquer the game!
            </div>
          ) : (
            <ul className="p-4 w-full flex flex-col gap-2">
              {players.map((player, index) => (
                <li key={index} className="bg-blue-500 rounded-2xl p-3">
                  {index + 1}. {player.username} - {player.time.toFixed(2)} sec
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LeaderBoard;
