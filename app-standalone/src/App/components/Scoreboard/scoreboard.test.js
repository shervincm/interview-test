import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Scoreboard from "./scoreboard"; 

// Test 1: Check if the Scoreboard is rendered
test("Check if the Scoreboard is rendered", () => {
    // Render the Scoreboard component
    render(<Scoreboard />);
    // Check if the Scoreboard is rendered
    expect(screen.getByText("Scoreboard")).toBeInTheDocument();
}
);

// Test 2: Check if the Scoreboard is rendered with the correct score
test("Check if the Scoreboard is rendered with the correct score", () => {
    // Render the Scoreboard component
    render(<Scoreboard />);
    
    // Check if the Scoreboard is rendered with the correct score
    expect(screen.getByText("Player X:0")).toBeInTheDocument();
    expect(screen.getByText("Player O:0")).toBeInTheDocument();
}
);

// Test 3 make sure reset button is rendered
test("Check if the reset button is rendered", () => {
    // Render the Scoreboard component
    render(<Scoreboard />);
    
    // Check if the reset button is rendered
    expect(screen.getByText("Reset Score")).toBeInTheDocument();
}
);

// Test 4 make sure reset function is called when reset button is clicked
test("Check if the reset function is called when reset button is clicked", () => {
    // Render the Scoreboard component
    render(<Scoreboard />);
    
    // Check if the reset function is called when reset button is clicked
    fireEvent.click(screen.getByText("Reset Score"));

    expect(screen.getByText("Player X:0")).toBeInTheDocument();
}
);


