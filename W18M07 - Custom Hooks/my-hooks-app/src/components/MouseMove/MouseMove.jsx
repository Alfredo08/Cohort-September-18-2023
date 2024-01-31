import useMouseMove from "../../hooks/useMouseMove";

const MouseMove = () => {
    const [coordinates] = useMouseMove(); 

    return(
        <>
            <h1> Mouse coordinates </h1>
            <p> x: {coordinates.x} y: {coordinates.y} </p>
        </>
    );
}

export default MouseMove;

