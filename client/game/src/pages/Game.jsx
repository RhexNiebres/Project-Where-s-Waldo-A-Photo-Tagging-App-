import React from 'react';
import Map from '../assets/map.jpg';

const Game = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Where's Waldo?</h1>
      <p className="mb-4 text-gray-700">
        Click on the image to select a character!
      </p>
      <img
        src={Map}
        alt="Where's Waldo"
        className="max-w-full h-auto cursor-pointer"
      />
    </div>
  );
};

export default Game;