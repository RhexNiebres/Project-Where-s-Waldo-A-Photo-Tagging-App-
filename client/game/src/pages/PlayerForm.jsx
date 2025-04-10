import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { submitPlayerData } from '../apiServices/submitPlayer'; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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
      username: playerName, 
      time: time,
    };

    try {
      const data = await submitPlayerData(playerData); // Use the API function

      console.log('Player created:', data);
      navigate('/leaderboard'); 
    } catch (error) {
      console.error('Error:', error); 
      alert(`Error: ${error.message}`); 
    }
  };

  return (
    <div className="player-form min-h-screen bg-slate-100 flex flex-col">
       <NavBar />
       <div className="bg-blue-500 flex flex-col items-center justify-items-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-7 text-white text-center font-bold mx-auto mt-50 mb-5" >
       <h2 className="text-center text-yellow-300 font-extrabold text-4xl m-3">You Did It, Champion!🏆</h2>
       <p className='max-w-xs mx-auto pb-4'>Now, its time to enter your name! and join the ranks of the greats! </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-slate-100 p-4 rounded-2xl text-blue-500 shadow-2xl">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Username"
          className="mb-4 px-4 py-3 border shadow-md border-slate-300 rounded text-center"
        />
        <h3 className='p-3'>Your Time is: {time.toFixed(1)} seconds</h3>
        <button type="submit" className="bg-blue-500 text-2xl text-yellow-300  px-5 p-1 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 shadow-md hover:shadow-xl">
          Submit
        </button>
      </form>
       </div>
        
      <div className='bg-blue-500 flex flex-col items-center justify-items-center max-w-3xl w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] shadow-lg rounded-3xl p-4 text-white text-center font-bold mx-auto mt-10'>
      <h1 className='text-yellow-300 text-4xl p-5 font-extrabold leading-snug'  >was that your best?🤔</h1>
      <p className='max-w-xs mx-auto pb-4 text-xl'>Warning: Your current record will be lost if you press the button.😓</p>
    <Link to="/rules" className='bg-slate-100 text-2xl text-blue-500 font-extrabold p-2 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 shadow-md hover:shadow-xl hover:bg-yellow-300 hover:blur-none '>Play Again?</Link>
      </div>
      <Footer/>
    </div>
  );
};

export default PlayerForm;
