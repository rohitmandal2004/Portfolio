import React, { useRef, useState } from 'react';

const Tilt = ({ children, max = 15 }) => {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate rotation based on cursor position relative to element center
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    setRotate({ x: -y * max, y: x * max });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: rotate.x === 0 && rotate.y === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
        willChange: 'transform',
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );
};

export default Tilt;
