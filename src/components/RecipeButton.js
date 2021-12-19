import { Link } from "react-router-dom";

const RecipeButton = ({urlTo}) => {
    return(
        <Link to={urlTo} className="btn border position-absolute bottom-0 end-0 m-2 border-dark">Recipe</Link>
    )                                  
}

export default RecipeButton;
