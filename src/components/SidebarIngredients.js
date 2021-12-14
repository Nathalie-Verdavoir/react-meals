import { Link } from "react-router-dom";

const SidebarIngredients = ({ingredients}) => {
return (
    <>
    <aside className="ingredients">
        <h3>All ingredients</h3>
        {ingredients ?
            <> 
            {ingredients.map(ingredient => {
                return(
                    <article key={ingredient.idIngredient}>
                       
                        <Link to={`/ingredient/${ingredient.strIngredient}`}>
                            {ingredient.strIngredient}
                        </Link>
                        
                    </article>
                )
            })
            } 
            </> 
            :   
            (
                <p>pas de ingredients</p>
            )
       }
       <article key="allIngredients">
                       
                       <Link to={`/ingredients/all`}>
                          ...
                       </Link>
                       
        </article>
    </aside>
    </>
) 
}

export default SidebarIngredients;