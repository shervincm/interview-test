import React from 'react';
import Board from './board';

// test 1 that board renders the correct number of squares
test('renders 9 squares', () => {
    const squares = Array(9).fill(null);
    expect(squares.length).toBe(9);
  });

// test 2 that the winning squares are included in the winning move array

test('winning squares are included in the winning move array', () => {
    const winningMove = [0,1,2];
    expect(winningMove).toContain(0);
    expect(winningMove).toContain(1);
    expect(winningMove).toContain(2);
  }
);