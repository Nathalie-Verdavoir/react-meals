import { Link } from "react-router-dom";

const RecipeButton = ({urlTo,titleButton}) => {
    return(
        <Link to={{pathname: urlTo}} className="btn border position-absolute bottom-0 end-0 m-2 border-dark">{titleButton}</Link>
    )                                  
}

export default RecipeButton;
