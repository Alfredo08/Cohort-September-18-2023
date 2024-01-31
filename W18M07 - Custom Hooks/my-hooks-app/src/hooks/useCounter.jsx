import { useState } from "react";

const useCounter = (initialValue, valueToAdd, valueToSubtract) => {
    const [counter, setCounter] = useState(initialValue);

    const addToCounter = () => {
        setCounter(counter + valueToAdd);
    }

    const subtractToCounter = () => {
        setCounter(counter - valueToSubtract);
    }

    return [counter, addToCounter, subtractToCounter];
}

export default useCounter;