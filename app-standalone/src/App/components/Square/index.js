import React from "react";
import PropTypes from 'prop-types';
import './square.css';

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */

// render a single square that can be clicked on. The value is either X, O or empty
const Square = ({onClick, value, isWinningMove}) => (
    // if the square is part of the winning move, add the winner class to the square making it square.winner
    <button className={`square ${isWinningMove ? "winner" : ""}`}
     onClick={onClick}>
        {value}
        
    </button>
);

Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    /**
     *  The value to put in the square
     */
    value: PropTypes.string,
    
    // is this square part of the winning move?
    isWinningMove: PropTypes.bool
};

export default Square;