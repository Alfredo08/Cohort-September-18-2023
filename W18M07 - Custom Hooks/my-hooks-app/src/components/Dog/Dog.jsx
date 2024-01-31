import useFetchDog from "../../hooks/usePet";

const Dog = () => {
    const API_URL = "https://dog.ceo/api/breeds/image/random";
    const [dogImage, loadNewImage] = useFetchDog(API_URL, "dog");
    return(
        <>
            <h1> Random dog image </h1>
            <div>
                <button onClick={loadNewImage}>New Image</button>
            </div>
            {dogImage && (<img src={dogImage} alt="Dog image"/>)}        
        </>
    );
}

export default Dog;