import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className={`square ${
        value === "X" ? "x-value" : value === "O" ? "o-value" : ""
      }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
