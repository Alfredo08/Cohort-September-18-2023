import { useParams, Link } from "react-router-dom";

const Article = () => {
    const params = useParams();

    return(
        <>
            <h3> The article that you've select is: {params.articleId} </h3>
            <Link to="/home"> Home </Link>
        </>
    );
}   

export default Article;