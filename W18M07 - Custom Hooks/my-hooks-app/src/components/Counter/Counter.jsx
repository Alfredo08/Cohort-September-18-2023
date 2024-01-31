import useCounter from "../../hooks/useCounter";

const Counter = (props) => {
    const [counterOne, addToCounterOne, subtractToCounterOne] = useCounter(props.initialValue, 
                                                                           props.valueToAdd,
                                                                           props.valueToSubtract);
    
    return(
        <>
            <h2> Counter: {counterOne} </h2>
            <button onClick={addToCounterOne}>
                Add 1
            </button>
            <button onClick={subtractToCounterOne}>
                Subtract 1
            </button>
        </>
    );
}

export default Counter;