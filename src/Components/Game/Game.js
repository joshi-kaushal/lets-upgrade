import React, { useState, useEffect } from "react";

const gameArray = new Array(9).fill("");

const Game = () => {
  let [isCross, setIsCross] = useState(true);
  let [winMessage, setWinMessage] = useState("");

  // New Game
  const playAgain = () => {
    setIsCross(true);
    setWinMessage("");
    gameArray.fill("");
  };

  // Game Logic
  const findWinner = () => {
    if (
      gameArray[0] === gameArray[1] &&
      gameArray[0] === gameArray[2] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has Won!`);
    } else if (
      gameArray[3] === gameArray[4] &&
      gameArray[3] === gameArray[5] &&
      gameArray[3] !== ""
    ) {
      setWinMessage(`${gameArray[3]} has Won!`);
    } else if (
      gameArray[6] === gameArray[7] &&
      gameArray[6] === gameArray[8] &&
      gameArray[6] !== ""
    ) {
      setWinMessage(`${gameArray[6]} has Won!`);
    } else if (
      gameArray[0] === gameArray[3] &&
      gameArray[0] === gameArray[6] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has Won!`);
    } else if (
      gameArray[1] === gameArray[4] &&
      gameArray[1] === gameArray[7] &&
      gameArray[1] !== ""
    ) {
      setWinMessage(`${gameArray[1]} has Won!`);
    } else if (
      gameArray[2] === gameArray[5] &&
      gameArray[2] === gameArray[8] &&
      gameArray[2] !== ""
    ) {
      setWinMessage(`${gameArray[2]} has Won!`);
    } else if (
      gameArray[0] === gameArray[4] &&
      gameArray[0] === gameArray[8] &&
      gameArray[0] !== ""
    ) {
      setWinMessage(`${gameArray[0]} has Won!`);
    } else if (
      gameArray[2] === gameArray[4] &&
      gameArray[2] === gameArray[6] &&
      gameArray[2] !== ""
    ) {
      setWinMessage(`${gameArray[2]} has Won!`);
    }
  };

  return <h1>Game Component</h1>;
};

export default Game;
