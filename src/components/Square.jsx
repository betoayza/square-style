import React, { useState, useEffect } from "react";

let red = 0;
let green = 0;
let blue = 0;

let squareInitialStyle = {
  height: "255px",
  width: "255px",
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
};

export const Square = () => {
  const [squareStyle, setSquareStyle] = useState(squareInitialStyle);
  const [dimmer, setDimmer] = useState(false);

  const randomColor = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const changeDimmer = () => {
      setTimeout(() => {
        red = randomColor(0, 255);
        green = randomColor(0, 255);
        blue = randomColor(0, 255);

        // console.log(red, green, blue);

        setSquareStyle({
          ...squareStyle,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        });
      }, 1000);
    };
    dimmer && changeDimmer();
  });

  const handleMouseOver = () => {
    setDimmer(true);
  };

  const handleMouseLeave = () => {
    setDimmer(false);
  };

  const handleDoubleClick = () => {
    setDimmer(false);
  };

  return (
    <div
      style={squareStyle}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
    ></div>
  );
};
