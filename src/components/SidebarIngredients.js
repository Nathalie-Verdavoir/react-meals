import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetIngredientsMealQuery } from "../services/mealApi";
import { setIngredientsMeal , setIngredientsMealLoading , setIngredientsMealError } from '../slices/ingredientsMealSlice';
import Loader from "./Loader";

const SidebarIngredients = () => {

    const { ingredientsMeal } = useSelector(state => state.ingredientsMeal);
    const { isIngredientsMealLoading } = useSelector(state => state.ingredientsMeal);
    const { data,  isLoading, isSuccess, isError } = useGetIngredientsMealQuery();
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
 
    if(isSuccess && data && data.meals)dispatch(setIngredientsMeal(data.meals));
    if(isLoading)dispatch(setIngredientsMealLoading());
    if(isError)dispatch(setIngredientsMealError());

    return (
        <>
            <aside className="ingredients rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsMealLoading ? <Loader/> :
                    ( ingredientsMeal ?
                        (<> 
                            {ingredientsMeal.slice().sort(propComparator('strIngredient')).slice(0,10).map(ingredient => {
                                    return(
                                        <article key={ingredient.idIngredient}>
                                            <Link to={`/ingredient/${ingredient.strIngredient}`}>
                                                {ingredient.strIngredient}
                                            </Link>
                                        </article>
                                    )
                                })
                            } 
                            <article key="allIngredients">
                                <Link to={`/allIngredients`}>
                                    ...
                                </Link>
                            </article>
                        </> )
                        :   
                        (<p>pas de ingredients</p>)
                    )
                }
            </aside>
        </>
    ) 
}

export default SidebarIngredients;