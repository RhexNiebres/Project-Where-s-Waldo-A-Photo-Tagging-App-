import React from "react";

const CharacterSelectionPopup = ({ popupPosition, characters, handleCharacterSelection }) => {
  return (
    <div
      className={`absolute bg-white p-4 rounded shadow-lg z-50 ${
        popupPosition.top === 0 && popupPosition.left === 0 ? "hidden" : ""
      }`}
      style={{
        top: `${popupPosition.top}px`,
        left: `${popupPosition.left}px`,
      }}
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
  );
};

export default CharacterSelectionPopup;
