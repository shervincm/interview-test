import React, { useState } from "react";
import Board from "../Board";
import Scoreboard from "../Scoreboard/scoreboard";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
     // state to track the game history and reset the game to 9 empty squares
     const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
     // state to manage the number of moves in the game
     const [stepNumber, setStepNumber] = useState(0);
     // state to manage the player's turn and what value to put in the square
     const [xIsNext, setXisNext] = useState(true);
     // state to manage the winning move
     const [winningMove, setWinningMove] = useState([]);

     // function to calculate the winner
    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        
        // loop through the lines and check if the squares have the same value
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                // return the player and the line that won
                return { player: squares[a], line: [a, b, c] };
            }
        }
        
        return null;
    };

    const handleClick = (i) => {
        // get the history of the game up to the current move. SLice method doesn't include end index so add 1
        const history = gameHistory.slice(0, stepNumber + 1);
        // get the current move. length doesn't start at 0 like an array so subtract 1
        const current = history[history.length - 1];
        // create a copy of the squares array which is the current move
        const squares = current.squares.slice();
        
        // check if there is a winner or if the square is already filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        // put an X or O in the square
        squares[i] = xIsNext ? "X" : "O";

        // set the state of gameHistory to the history of the game up to the current move
        setGameHistory([...history, { squares }]);
        // set the state of stepNumber to the length of the history
        setStepNumber(history.length);
        // set the state of xIsNext to the opposite of what it was
        setXisNext(!xIsNext);
    };
    
    // function to jump to a specific move
    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };
    
    // get the history of the game up to the current move
    const current = gameHistory[stepNumber];
    // calculate the winner
    let winner = calculateWinner(current.squares);

    // function to reset the game
    const resetGame = () => {
        setGameHistory([{ squares: Array(9).fill(null) }]);
        setStepNumber(0);
        setXisNext(true);
        setWinningMove(null);
    };

    // map the history of the game to a list of moves
    const moves = gameHistory.map((step, move) => {
        const desc = move ?
        'Go to move #' + move :
        'Go to game start';
        return (
            <li key={move}>
                <button onClick={move ? () => jumpTo(move): resetGame}>{desc}</button>
            </li>
        );
    });

    // display the status of the game
    // state to track the status of the game
    let [status, setStatus] = useState("");
    // set the initial status of the game
    let initialStatus;
    if (winner) {
        initialStatus ="Winner: Player" + winner.player 
    } else if (!winner && stepNumber === 9) {
        initialStatus="It's a draw!";
    } 
    else {
        initialStatus="Next player: " + (xIsNext ? "X" : "O");
    }

    // use Effect to set the status of the game and not cause an infinite loop
    useEffect(() => {
        setStatus(initialStatus);
    }, [initialStatus]);

    console.log(initialStatus);
    
    // function to play rock paper scissors
    function RockPaperScissors() {
        // create an array of rock, paper, scissors
        const rps = ["rock", "paper", "scissors"];
        // generate a random number between 0 and 2
        const random = Math.floor(Math.random() * 3);
        // get the computer's choice
        const computer = rps[random];
        console.log(computer);
        // get the player's choice
        let player = prompt("Enter rock, paper, or scissors");
        player = player.toLowerCase();
        // check if the player's choice matches the rps array
        while (!rps.includes(player)) {
        // if not, prompt the player to enter a valid input that matches the rps array
        player = prompt("Invalid input! Please enter rock, paper, or scissors");
        player = player.toLowerCase();
        }
        // if it's a draw recall the function to play again
        if (computer === player) {
            alert("It's a draw! Play again!");
            RockPaperScissors();
        } else if (
            (computer === "rock" && player === "paper") ||
            (computer === "paper" && player === "scissors") ||
            (computer === "scissors" && player === "rock")
        ){
            // set timeout so the initialStatus can be updated once the alert is closed as alerts block the code until closed
            alert("PlayerX wins!");
            setTimeout(() => {
                initialStatus="Winner: PlayerX";
              }, 100);
            initialStatus="Winner: PlayerX";
            }
        else {
            alert("PlayerO wins!");
            setTimeout(() => {
                initialStatus="Winner: PlayerO";
              }, 100);
            initialStatus="Winner: PlayerO";
        }
        setStatus(initialStatus);
        }
    
        // if it is a draw, call the RockPaperScissors function to determine the winner
        useEffect(() => {
            if (initialStatus=== "It's a draw!") {
                RockPaperScissors();
                setStatus(initialStatus);
            }
        }, [initialStatus]);
        
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    data-test-id="square"
                    winningMove={winner ? winner.line : []}
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <div className="game-scoreboard">
                <Scoreboard status={status}/>
            </div>
        </div>
    );
};

export default Game;