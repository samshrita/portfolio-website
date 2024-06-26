import { useState, useEffect } from "react";

// let deviceWidth = window.innerWidth, deviceHeight = window.innerHeight;
let max = 25,
  min = 15;

function WobbleCircle() {
  const [borderPt, setborderPt] = useState([16, 16, 16, 16]);

  useEffect(() => {
    const interval = setInterval(() => {
      setborderPt(mathRandom());
    }, 1600);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let borderRadius = `${borderPt[0]}rem ${borderPt[1]}rem ${borderPt[2]}rem ${borderPt[3]}rem `;

  return (
    <div
      className="wobble"
      style={{
        borderRadius: borderRadius,
        backgroundImage: `url("samshrita.JPG")`,
      }}
    ></div>
  );
}

function mathRandom() {
  return [
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
    Math.floor(Math.random() * (max - min) + min),
  ];
}

export default WobbleCircle;
