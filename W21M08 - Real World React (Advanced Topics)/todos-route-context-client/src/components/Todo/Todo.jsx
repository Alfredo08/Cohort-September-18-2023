const Todo = (props) => {
    return(
        <>
            <h3> Description: {props.todo.description}</h3>
            <h3> Status: {props.todo.status}</h3>
        </>
    );
}

export default Todo;
