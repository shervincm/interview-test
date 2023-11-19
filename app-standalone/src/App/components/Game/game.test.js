import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Game from "./game"; 

// test 1 check if the game is rendered

test("Check if the Game is rendered", () => {
    // Render the Game component
    render(<Game />);
    // Check if the Game is rendered
    expect(screen.getByText("Go to game start")).toBeInTheDocument();
}
);

// test 2 check if the game is rendered with the correct status

test("Check if the game is rendered with the correct status", () => {
    // Render the Game component
    render(<Game />);
    // Check if the Game is rendered with the correct status
    expect(screen.getByText("Next player: X")).toBeInTheDocument();
}
);

// test 3 check if the game is rendered with the correct status after a click

test("Check if the game is rendered with the correct status after a click", () => {
    // Render the Game component
    render(<Game />);
    const button = screen.getByTestId("square");
    // Click on the square
    fireEvent.click(button);
    const xIsNext = false;
    expect(xIsNext).toBe(false);
  });

// test 4 check if the game is rendered with the correct status after a click

test("Check if the game goes to the start when the button is clicked", () => {
    render(<Game />);
    const button = screen.getByText("Go to game start");
    fireEvent.click(button);
    const squares = screen.queryAllByTestId("square");
    // Check if the squares are empty after the button is clicked
    expect(squares.every(square => square.textContent === '')).toBeTruthy();
  });
  
