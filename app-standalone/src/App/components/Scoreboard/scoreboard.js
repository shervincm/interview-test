import React from "react";
import { useState, useEffect } from "react";

function Scoreboard({status}) {
    // state to track the score of the game
    const [scoreBoard, setScoreBoard] = useState({playerX: 0, playerO: 0});

    // update the score board when the game is over and the status is updated
    useEffect(() => {
        const updateScoreBoard = () => {
          if (status === "Winner: PlayerX") {
            setScoreBoard((prevScore) => ({ ...prevScore, playerX: prevScore.playerX + 1 }));
          } else if (status === "Winner: PlayerO") {
            setScoreBoard((prevScore) => ({ ...prevScore, playerO: prevScore.playerO + 1 }));
          }
        };
    
        updateScoreBoard();
      }, [status]);

      console.log(status);

      // function to reset the score
      function resetScore(){
        setScoreBoard({playerX: 0, playerY: 0})
      }

    return (
        <div className="game-scoreboard">
                <div>Scoreboard</div>
                <div>Player X:{scoreBoard.playerX} </div>
                <div>Player O:{scoreBoard.playerO}</div>
                <button onClick={resetScore}>Reset Score</button>
            </div>
    )
}

export default Scoreboard;