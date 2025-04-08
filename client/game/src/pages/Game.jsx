import React from 'react';
import Map from '../assets/map.jpg';

const Game = () => {
  const handleImageClick = (event) => {
    const { clientX, clientY, currentTarget } = event;

    // Get the bounding box of the image to calculate its position on the screen
    const rect = currentTarget.getBoundingClientRect();

    // Calculate the click position relative to the scaled image
    const scaledX = clientX - rect.left;
    const scaledY = clientY - rect.top;

    // Reverse the browser zoom scaling transformation to get the original pixel coordinates
    const originalX = Math.round((scaledX / window.devicePixelRatio));
    const originalY = Math.round((scaledY / window.devicePixelRatio));

    // Log the original pixel coordinates
    console.log(`Original Pixel Coordinates: X=${originalX}, Y=${originalY}`);
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Main heading for the game */}
      <h1 className="text-2xl font-bold mb-4">Where's Waldo?</h1>

      {/* Instructions for the user */}
      <p className="mb-4 text-gray-700">
        Click on the image to select a character!
      </p>

      {/* Image with click handler */}
      <img
        src={Map}
        alt="Where's Waldo"
        onClick={handleImageClick} // Attach the click handler
        className="max-w-full h-auto cursor-pointer"
      />
    </div>
  );
};

export default Game;