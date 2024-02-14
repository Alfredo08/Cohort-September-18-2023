import { robotChoice, announceResult } from "../helpers";


describe('announceResult function', () => {
    let fakeState;
  
    beforeEach(() => {
      fakeState = {
        compSelection: null,
        playerSelection: null,
        status: 'Waiting',
        cheating: false
      };
    });
    
    test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
          fakeState.playerSelection = 'Axe';
      fakeState.compSelection = 'Tree';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
    });
  
    test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
      fakeState.playerSelection = 'Axe';
      fakeState.compSelection = 'Axe';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
    });
  
    test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
      fakeState.playerSelection = 'Axe';
      fakeState.compSelection = 'Moai';
      expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
    });
  
    test('returns "Waiting" if nothing is passed in', () => {
      expect(announceResult()).toBe('Waiting');
    });
  });

describe('Robot choice function', () => {
    test('Returns the winning item if cheating is set to false', () => {
        const playerSelection = 'Moai';
        const cheating = false;

        const actual = robotChoice(playerSelection, cheating);
        const expected = ['Moai', 'Axe', 'Tree'];
        // console.log(actual);
        expect(expected).toContain(actual);
    });

    test('Returns the winning item if cheating is set to true', () => {
        const playerSelection = 'Moai';
        const cheating = true;
        const actual = robotChoice(playerSelection, cheating);
        const expected = 'Tree';
        expect(expected).toBe(actual);
    });
});