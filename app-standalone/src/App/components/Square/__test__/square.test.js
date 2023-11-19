import React from 'react';
import { shallow } from 'enzyme';
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Square from './square'

describe('Square', () => {

    it('renders the props.value passed in ', () => {
        const wrapper = shallow(<Square value='X'/>);
        expect(wrapper.find('button').text()).toEqual('X');
    });

    it('calls the click handler when the button is click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Square onClick={onClickHandler}/>);

        wrapper.find('button').simulate('click');
        expect(onClickHandler).toHaveBeenCalled()
    });

});

// Test 2 check to see if Square component renders
test('Renders a square without a value', () => {
    const { queryByRole } = render(<Square />);
    const squareElement = screen.queryByRole('button');
    // Check if the square element is in the document
    expect(squareElement).toBeInTheDocument(); 
  });

// Test case 3: Clicking on the square allows the onClick function
test('Clicking on the square allows the onClick function', () => {
    // Create a mock function to simulate the onClick handler
    const onClickMock = jest.fn();
  
    // Render the Square component with the mock function
    const { getByRole } = render(<Square value="X" onClick={onClickMock} />);
  
    // Get the square element by its role as a button
    const squareElement = screen.getByRole('button');
  
    // Simulate a click on the square element
    fireEvent.click(squareElement);
  
    // Expect the onClickMock to have been called exactly once
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });


// Test 4 check if the square turns red when it's a winning move
test('Check if the square turns red when it is a winning move', () => {
    // Render the Square component with isWinningMove set to true
    const { getByRole } = render(<Square value="O" onClick={() => {}} isWinningMove={true} />);
  
    // Get the square element by its role as a button
    const squareElement = screen.getByRole('button');
  
    // Check if the 'square winner' class is in the square's className
    expect(squareElement).toHaveClass('square winner');
  });
  