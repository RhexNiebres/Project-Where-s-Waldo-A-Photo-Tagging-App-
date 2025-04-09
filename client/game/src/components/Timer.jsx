
import React, { useState, useEffect } from "react";

const Timer = ({ isGameStarted, onGameEnd }) => {
    const [time, setTime] = useState(0); 
  
    useEffect(() => {
      let timer;
      if (isGameStarted) {
        timer = setInterval(() => {
          setTime((prev) => prev + 0.1);  
        }, 100); 
      } else {
        clearInterval(timer);
        onGameEnd(time);  
      }
  
      return () => clearInterval(timer);
    }, [isGameStarted, onGameEnd]);
  
    return (
      <div className="mb-4 bg-slate-100 p-2 text-center rounded-2xl text-blue-500 font-extrabold ">
        <p>Time: {time.toFixed(1)}s</p> 
      </div>
    );
  };

  export default Timer;
  
