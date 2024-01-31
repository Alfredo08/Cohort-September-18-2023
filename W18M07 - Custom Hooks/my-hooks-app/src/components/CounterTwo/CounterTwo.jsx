import useCounter from "../../hooks/useCounter"

const CounterTwo = (props) => {
    const [counterTwo, addCounterTwo, subtractCounterTwo] = useCounter(props.initialValue, 
                                                                       props.valueToAdd,
                                                                       props.valueToSubtract);
    
    return(
        <>
            <h2> Counter 2: {counterTwo}</h2>
            <button onClick={addCounterTwo}>
                Add 15
            </button>
            <button onClick={subtractCounterTwo}>
                Subtract 3
            </button>
        </>
    );
}

export default CounterTwo;