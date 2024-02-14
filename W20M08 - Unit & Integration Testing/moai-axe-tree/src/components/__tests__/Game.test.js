import Game from './../Game';
import { render, debug, prettyDOM, fireEvent } from "@testing-library/react";

describe('Tests for the Game component', () => {
    test('Toogle the cheating boolean by clicking on the head robot icon', () => {
        // 1) Render the Game component
        const {getByTestId} = render(<Game/>);
        // debug();
        // prettyDOM(getByTestId);

        // 2) Find the robot head icon inside the component
        const robotHead = getByTestId('robot-head');

        // 3) Click the robot head icon
        fireEvent.click(robotHead);

        // 4) Check if the cheating option is set to true
        //    Or check if the class 'cheating' is added to the robot element
        expect(robotHead).toHaveClass('cheating');

        // 5) Click the robot head icon
        fireEvent.click(robotHead);

        // 6) Check if the robot head no longer has the class 'cheating'
        expect(robotHead).not.toHaveClass('cheating');
    });
});