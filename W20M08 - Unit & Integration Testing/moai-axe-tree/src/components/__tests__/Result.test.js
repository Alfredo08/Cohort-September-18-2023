import Result from './../Result';
import { fireEvent, render, getByTestId } from '@testing-library/react';
import axios from 'axios';

// Tell jest to simulate/fake the axios request
jest.mock('axios');

const mockData = [
    {
        "id": 1,
        "name": "Player 1",
        "points": 36
    },
    {
        "id": 2,
        "name": "Player 2",
        "points": 29
    },
    {
        "id": 3,
        "name": "Player 3",
        "points": 22
    }
];


test('Displays the high scores from the API', () => {
    // 1) Preparing the simulation of the axios request
    axios.get.mockResolvedValue({data: mockData});

    // 2) Render the Result component, don't forget about props
    const {getByTestId, debug, findByText} = render(<Result status="Waiting"/>)

    // 3) Find the high scores button
    const highScoresButton = getByTestId('high-scores');

    // 4) Click on the high scores button
    fireEvent.click(highScoresButton);
    
    // 5) Find the text of Player 2
    return findByText('Player 2', {exact: false});

}); 