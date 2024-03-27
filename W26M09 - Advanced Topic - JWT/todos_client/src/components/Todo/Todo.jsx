
const Todo = (props) => {
    return(
        <>
            <h3> Todo: {props.description} </h3>
            <p> Status: {props.status} </p>
        </>
    );
}

export default Todo;