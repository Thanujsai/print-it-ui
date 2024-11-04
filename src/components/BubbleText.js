import React, { useState } from "react";
import styles from "../css/bubble.css"; // Ensure the correct path

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Bubbbbbbbble text".split("").map((child, idx) => (
        <span
          key={idx}
          onMouseEnter={() => handleMouseEnter(idx)}
          onMouseLeave={handleMouseLeave}
          className={`${styles.hoverText} 
            ${hoverIndex === idx ? styles.hover : ""}
            ${hoverIndex === idx - 1 || hoverIndex === idx + 1 ? styles.adjacent : ""}
            ${hoverIndex === idx - 2 || hoverIndex === idx + 2 ? styles.farAdjacent : ""}
          `}
        >
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;
