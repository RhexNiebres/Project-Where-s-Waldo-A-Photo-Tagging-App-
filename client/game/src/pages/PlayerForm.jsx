import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { submitPlayerData } from '../apiServices/submitPlayer'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PlayerForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [playerName, setPlayerName] = useState('');
  const [time, setTime] = useState(location.state?.time || 0); 

  useEffect(() => {
    if (location.state?.time) {
      setTime(Number(location.state?.time));
    }
  }, [location.state?.time]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that both name and time are set
    if (!playerName) {
      alert('Please enter a username');
      return;
    }

    if (time === undefined || time === null || isNaN(time)) {
      alert('Please provide a valid time');
      return;
    }

    console.log("Submitting player data:", { username: playerName, time });

    const playerData = {
      username: playerName, // Ensure to match the API's expected field name
      time: time, // Ensure time is a valid number
    };

    try {
      const data = await submitPlayerData(playerData); // Use the API function

      console.log('Player created:', data);
      navigate('/leaderboard'); // Redirect to leaderboard after submission
    } catch (error) {
      console.error('Error:', error); // Log error for debugging
      alert(`Error: ${error.message}`); // Display error message
    }
  };

  return (
    <div className="player-form min-h-screen bg-slate-100 flex flex-col">
       <NavBar />
       <div className="bg-blue-500 flex flex-col items-center justify-items-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-24" >
       <h2 className="text-center text-yellow-300 font-extrabold text-4xl mb-7">Enter your username</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-slate-100 p-4 rounded-2xl text-blue-500">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Username"
          className="mb-4 px-4 py-2 border border-slate-300 rounded text-center"
        />
        <button type="submit" className="bg-white text-2xl text-blue-600  px-5 p-1 border rounded-2xl hover:bg-yellow-300 transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 shadow-md hover:shadow-xl">
          Submit
        </button>
      </form>
      <div className="text-center mt-4">
        <h3>Time: {time.toFixed(1)} seconds</h3>
      </div>
       </div>
      
      <Footer/>
    </div>
  );
};

export default PlayerForm;
