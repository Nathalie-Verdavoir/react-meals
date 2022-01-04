import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIngredientsDrink , setIngredientsDrinkLoading , setIngredientsDrinkError } from '../slices/ingredientsDrinkSlice';
import Loader from "./Loader";

const SidebarDrinksIngredients = () => {
        
    const { ingredientsDrink } = useSelector(state => state.ingredientsDrink);
    const { isIngredientsDrinkLoading } = useSelector(state => state.ingredientsDrink);
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    
    useEffect(() => { 
        if(ingredientsDrink===null) {
            dispatch(setIngredientsDrinkLoading());
            ( async function (){
                try {
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
                    const response = await fetch(url, {
                        headers: {
                             Accept: "application/json",
                        },
                    });
                    const ingredientsFromAPI = await response.json();
                    dispatch(setIngredientsDrink(ingredientsFromAPI.drinks.sort(propComparator('strIngredient1'))));
                } catch(error) {
                    dispatch(setIngredientsDrinkError());
                    console.log(error);
                }
            })();
        }
    }, [ingredientsDrink,dispatch]);

    return (
        <>
            <aside className="ingredientsDrinks rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsDrinkLoading ? <Loader/> :
                    ( ingredientsDrink ?
                        (<> 
                            {ingredientsDrink.slice(0,10).map(ingredient => {
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
                                <Link to={`/ingredientsDrinks/all`}>
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