import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../assets/map.jpg";
import useDrag from "../hooks/Drag";
import usePopup from "../hooks/usePopup";
import { validateCharacter } from "../apiServices/validateCharacter";
import Timer from "../components/Timer";
import NavBar from "../components/NavBar";
import CharacterSelectionPopup from "../components/CharacterSelectionPopup";
import FoundCharacterMarkers from "../components/FoundCharacterMarkers";

const Game = () => {
  const navigate = useNavigate();
  const { popupPosition, clickCoordinates, handleImageClick } = usePopup();

  const characters = [
    { id: 1, name: "Waldo", image: "waldo.png" },
    { id: 2, name: "Wenda", image: "wenda.jpg" },
    { id: 3, name: "Wizard", image: "wizard.gif" },
  ];

  const {
    dragContainerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleContextMenu,
  } = useDrag();

  const [foundCharacters, setFoundCharacters] = useState([]);
  const [isGameStarted, setIsGameStarted] = useState(true);
  const [finalTime, setFinalTime] = useState(null);

  const handleCharacterSelection = async (characterId, characterName) => {
    if (foundCharacters.some((char) => char.id === characterId)) {
      alert(`${characterName} has already been found!`);
      return;
    }

    try {
      const result = await validateCharacter(
        characterId,
        clickCoordinates.x,
        clickCoordinates.y
      );
      if (result?.success) {
        alert(`You found ${characterName}!`);
        setFoundCharacters((prev) => [
          ...prev,
          {
            id: characterId,
            name: characterName,
            x: clickCoordinates.x,
            y: clickCoordinates.y,
          },
        ]);
      } else {
        alert("Try again!");
      }
    } catch {
      alert("An error occurred while validating your selection.");
    }
  };

  useEffect(() => {
    if (foundCharacters.length === characters.length && isGameStarted) {
      setIsGameStarted(false);
    }
  }, [foundCharacters]);

  const handleGameEnd = (time) => {
    setFinalTime(time);
    alert(`🎉Congratulations!🎉 You found all characters in ${time.toFixed(1)} seconds! Great Job!🎉`);
    navigate("/player-form", { state: { time } });
  };

  return (
    <div className="flex flex-col items-center p-4 relative bg-slate-100 pt-20">
      <NavBar />
      <div className="bg-blue-500 p-4 rounded-2xl">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-300">
          Where are they hiding?
        </h1>
        <p className="bg-slate-100 p-2 rounded-2xl font-extrabold mb-4 text-blue-500">
          GUIDE FOR PC USERS: <br /> Left click to select. Hold right click to drag!
        </p>
        <Timer isGameStarted={isGameStarted} onGameEnd={handleGameEnd} />
        <h1 className="bg-blue-500 p-2 rounded-2xl m-1 text-2xl text-yellow-300 font-extrabold text-center">
          find them quickly!
        </h1>
      </div>

      <div className="flex space-x-4 mt-4">
        {characters.map((character) => (
          <div key={character.id} className="flex flex-col items-center">
            <img
              src={character.image}
              alt={character.name}
              className="w-32 h-32 object-contain rounded-full mb-2"
            />
            <span className="text-lg font-semibold">{character.name}</span>
          </div>
        ))}
      </div>

      {/* image drag */}
      <div
        ref={dragContainerRef}
        className="relative overflow-auto border-2 border-gray-300 w-full h-[80vh] select-none"
        style={{ maxWidth: "100vw", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onContextMenu={handleContextMenu}
      >
        <img
          src={Map}
          alt="Where's Waldo"
          onClick={handleImageClick}
          onContextMenu={handleContextMenu}
          className="pointer-events-auto"
          style={{ maxWidth: "none", width: "auto", height: "auto" }}
        />

        <FoundCharacterMarkers foundCharacters={foundCharacters} />
      </div>

      {/* popup */}
      <CharacterSelectionPopup
        popupPosition={popupPosition}
        characters={characters}
        handleCharacterSelection={handleCharacterSelection}
      />
    </div>
  );
};

export default Game;
