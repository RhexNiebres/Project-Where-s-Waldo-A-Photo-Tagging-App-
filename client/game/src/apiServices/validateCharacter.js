export const validateCharacter = async (characterId, x, y) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_HOST + `/characters/${characterId}?x=${x}&y=${y}`
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error validating character:", error);
    throw error;
  }
};
