import React from 'react';
import Map from '../assets/map.jpg';
import useDrag from '../hooks/useDrag';
import usePopup from '../hooks/usePopup';  
import { fetchCharacter } from '../utils/fetchCharacter';

const Game = () => {
  // Destructure the return values from usePopup
  const { popupPosition, clickCoordinates, handleImageClick } = usePopup(); // Destructure the values correctly
  
  const characters = [
    { id: 1, name: 'Waldo' },
    { id: 2, name: 'Wenda' },
    { id: 3, name: 'Wizard' },
  ];

  const { dragContainerRef, handleMouseDown, handleMouseMove, handleMouseUp, handleContextMenu } = useDrag();

  const handleCharacterSelection = async (characterId, characterName) => {
    try {
      const result = await fetchCharacter(characterId, clickCoordinates.x, clickCoordinates.y);
      if (result?.success) {
        alert(`You found ${characterName}!`);
      } else {
        alert('Try again!');
      }
    } catch {
      alert('An error occurred while validating your selection.');
    }
  };

  return (
    <div className="flex flex-col items-center p-4 relative">
      <h1 className="text-2xl font-bold mb-4">Where are they hiding?</h1>
      <p className="mb-4 text-gray-700">Left click to select. Hold right click to drag!</p>

      <div
        ref={dragContainerRef}
        className="overflow-auto border-2 border-gray-300 w-full h-[80vh] select-none"
        style={{ maxWidth: '100vw', cursor: 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onContextMenu={handleContextMenu}
      >
        <img
          src={Map}
          alt="Where's Waldo"
          onClick={handleImageClick}  // Correct usage of the hook function
          onContextMenu={handleContextMenu}
          className="pointer-events-auto"
          style={{ maxWidth: 'none', width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Popup Menu */}
      <div
        className={`absolute bg-white p-4 rounded shadow-lg z-50 ${popupPosition.top === 0 && popupPosition.left === 0 ? 'hidden' : ''}`}
        style={{ top: `${popupPosition.top}px`, left: `${popupPosition.left}px` }}
      >
        <h3 className="text-lg font-semibold mb-2">Select the Character here!</h3>
        <ul className="space-y-1">
          {characters.map((character) => (
            <li
              key={character.id}
              onClick={() => handleCharacterSelection(character.id, character.name)}
              className="px-2 py-1 bg-slate-100 hover:bg-gray-200 rounded cursor-pointer"
            >
              {character.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
