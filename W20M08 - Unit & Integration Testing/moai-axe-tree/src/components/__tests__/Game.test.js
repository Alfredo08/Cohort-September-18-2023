import React from 'react';
import Game from '../Game';
import { render, fireEvent } from '@testing-library/react';

describe('tests for the Game component', () => {

  test('toggle the cheating boolean by clicking on the robot head icon', () => {

    // 1) Render the component
    const {getByTestId} = render(<Game />);
    
    /* Options to display the DOM Tree in terminal */
    // const {debug, container} = render(<Game/>);
    // debug();
    // prettyDOM(container);

    // 2) Find the robot head icon within the component
    const robotHeadIcon = getByTestId('robot-head');

    // 3) Click on the robot head icon
    fireEvent.click(robotHeadIcon);

    // 4) Check if the robot head has the class "cheating"
    expect(robotHeadIcon).toHaveClass('cheating');

    // 5) Click on the robot head icon
    fireEvent.click(robotHeadIcon);

    // 6) Check if the robot head does not have the class cheating
    expect(robotHeadIcon).not.toHaveClass('cheating');
  });

});
