
const Student = (props) => {
    console.log(props);
    return(
        <div>
            <h2> Full name: {props.firstName} {props.lastName} </h2>
            <p> Age: {props.age} </p>
        </div>
    );
}

export default Student;
