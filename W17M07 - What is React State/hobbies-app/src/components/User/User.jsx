import { useState } from "react";

const User = (props) => {

    const updateCounterByTwo = () => {
        props.setCounter(props.counter + 2)
    }

    return(
        <>
            <h2> Full name: {props.user.firstName} {props.user.lastName} </h2>
            <h3> Id: {props.user.id}</h3>
            <p> Age: {props.user.age} </p>
            <button onClick={updateCounterByTwo}> Add 2 to counter </button>
        </>
    );
}

export default User;