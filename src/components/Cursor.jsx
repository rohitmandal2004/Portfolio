import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let cursorX = 0;
    let cursorY = 0;
    let isHovering = false;
    let animationFrameId;

    const updatePosition = (e) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
      
      // Use requestAnimationFrame for buttery smooth 60fps/144fps updates
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      });
    };
    
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('service-card') ||
        target.classList.contains('neo-project-card') ||
        target.classList.contains('software-tag')
      ) {
        if (!isHovering) {
          isHovering = true;
          cursor.classList.add('hovering');
        }
      } else {
        if (isHovering) {
          isHovering = false;
          cursor.classList.remove('hovering');
        }
      }
    };

    window.addEventListener('mousemove', updatePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="neo-cursor"
      style={{ top: 0, left: 0 }}
    />
  );
};

export default Cursor;
