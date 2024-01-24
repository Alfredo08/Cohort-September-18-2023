
const Hobby = (props) => {
    return(
        <>
            <h3>Hobby: {props.hobby.name}</h3> 
            <p>User id: {props.hobby.userId}</p> 
        </>
    );
}

export default Hobby;