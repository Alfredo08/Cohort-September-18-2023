import usePet from "../../hooks/usePet"

const Cat = () => {
    const API_URL = "https://api.thecatapi.com/v1/images/search";
    const [catImage, loadNewImage] = usePet(API_URL, "cat");

    return (
        <>
            <h1> Random cat image </h1>
            <div>
                <button onClick={loadNewImage}>New Image</button>
            </div>
            {catImage && (<img src={catImage} alt="Cat image"/>)}
        </>
    );
}

export default Cat;