import React from "react";

const FoundCharacterMarkers = ({ foundCharacters }) => {
  return (
    <>
      {foundCharacters.map((char, index) => (
        <div
          key={`${char.id}-${char.x}-${char.y}-${index}`}
          className="absolute text-red-600 font-bold text-4xl pointer-events-none"
          style={{
            top: `${char.y}px`,
            left: `${char.x}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          ✔
        </div>
      ))}
    </>
  );
};

export default FoundCharacterMarkers;
