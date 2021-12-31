import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../actions/allActions";
import Loader from "./Loader";

const SidebarDrinksIngredients = () => {
        
    const ingredientsDrinks = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
    const isIngredientsLoading = useSelector(state => state.ingredientsDrinksReducer.isLoading);
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    
    useEffect(() => { 
        if(ingredientsDrinks===null) {
            dispatch(allActions.loadingIngredientsAction());
            ( async function (){
                try {
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list";
                    const response = await fetch(url, {
                        headers: {
                             Accept: "application/json",
                        },
                    });
                    const ingredientsFromAPI = await response.json();
                    dispatch(allActions.ingredientsDrinksAction(ingredientsFromAPI.drinks.sort(propComparator('strIngredient1'))));
                } catch(error) {
                    dispatch(allActions.onErrorIngredientsDrinksAction());
                    console.log(error);
                }
            })();
        }
    }, [ingredientsDrinks,dispatch]);

    return (
        <>
            <aside className="ingredientsDrinks rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsLoading ? <Loader/> :
                    ( ingredientsDrinks ?
                        (<> 
                            {ingredientsDrinks.slice(0,10).map(ingredient => {
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