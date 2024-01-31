import { useEffect, useState } from "react";

const useMouseMove = () => {
    const defaultValues = {
        x: 0, 
        y: 0
    };

    const [coordinates, setCoordinates] = useState(defaultValues);

    const handleMouse = (event) => {
        const newCoordinates = {
            x: event.x,
            y: event.y
        };

        setCoordinates(newCoordinates)
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouse);
        return () => {
            document.addEventListener('mousemove', handleMouse);
        };
    }, [coordinates]);

    return [coordinates];
}

export default useMouseMove;