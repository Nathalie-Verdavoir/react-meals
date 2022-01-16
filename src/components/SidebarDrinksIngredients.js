import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetIngredientsDrinkQuery } from "../services/drinkApi";
import { setIngredientsDrink , setIngredientsDrinkLoading , setIngredientsDrinkError } from '../slices/ingredientsDrinkSlice';
import Loader from "./Loader";

const SidebarDrinksIngredients = () => {
        
    const { ingredientsDrink } = useSelector(state => state.ingredientsDrink);
    const { isIngredientsDrinkLoading } = useSelector(state => state.ingredientsDrink);
    const { data,  isLoading, isSuccess, isError } = useGetIngredientsDrinkQuery();
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    
    if(isSuccess && data && data.drinks)dispatch(setIngredientsDrink(data.drinks));
    if(isLoading)dispatch(setIngredientsDrinkLoading());
    if(isError)dispatch(setIngredientsDrinkError());

    return (
        <>
            <aside className="ingredientsDrinks rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsDrinkLoading ? <Loader/> :
                    ( ingredientsDrink ?
                        (<> 
                            {ingredientsDrink.slice().sort(propComparator('strIngredient1')).slice(0,10).map(ingredient => {
                                    return(
                                        <article key={ingredient.strIngredient1}>
                                            <Link to={`/ingredientsDrinks/${ingredient.strIngredient1}`}>
                                                {ingredient.strIngredient1}
                                            </Link>
                                        </article>
                                    )
                                })
                            } 
                            <article key="allIngredients">
                                <Link to={`/allIngredientsDrink`}>
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

export default SidebarDrinksIngredients;