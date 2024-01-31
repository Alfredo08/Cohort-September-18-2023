import { useEffect, useState } from "react";

const usePet = (API_URL, type) => {
    const[petImage, setPetImage] = useState(null);

    const fetchPetImage = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        switch(type){
            case "dog": setPetImage(data.message);
                        break;
            case "cat": setPetImage(data[0].url);
                        break;
            default: console.log("Wrong option");
        }
    }

    const loadNewImage = () => {
        fetchPetImage();
    }

    useEffect(() => {
        fetchPetImage();
    }, []);

    return [petImage, loadNewImage];
}

export default usePet;