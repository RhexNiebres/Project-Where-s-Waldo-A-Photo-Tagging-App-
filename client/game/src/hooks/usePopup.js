import { useState } from 'react';

const usePopup = () => {
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const [clickCoordinates, setClickCoordinates] = useState({ x: 0, y: 0 });

  const handleImageClick = (event) => {
    if (event.button !== 0) return; //left-click 2 for right

    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();
    const scaleX = currentTarget.naturalWidth / rect.width;
    const scaleY = currentTarget.naturalHeight / rect.height;
    const originalX = Math.round((clientX - rect.left) * scaleX);
    const originalY = Math.round((clientY - rect.top) * scaleY);

    setClickCoordinates({ x: originalX, y: originalY });
    setPopupPosition({ top: clientY + 100, left: clientX + 50 });
  };

  return { popupPosition, clickCoordinates, handleImageClick };  // Ensure you're returning an object
};

export default usePopup;
