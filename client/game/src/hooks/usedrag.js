import { useRef } from 'react';

const useDrag = () => {
  const dragContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef({ x: 0, y: 0 });
  const scrollPosition = useRef({ left: 0, top: 0 });

  const handleMouseDown = (e) => {
    if (e.button === 2) {
      isDragging.current = true;
      startPosition.current = { x: e.clientX, y: e.clientY };
      const container = dragContainerRef.current;
      scrollPosition.current = {
        left: container.scrollLeft,
        top: container.scrollTop,
      };
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - startPosition.current.x;
    const dy = e.clientY - startPosition.current.y;
    const container = dragContainerRef.current;
    container.scrollLeft = scrollPosition.current.left - dx;
    container.scrollTop = scrollPosition.current.top - dy;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return {
    dragContainerRef,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleContextMenu,
  };
};

export default useDrag;
