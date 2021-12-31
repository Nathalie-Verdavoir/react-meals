import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../actions/allActions";
import Loader from "./Loader";

const SidebarIngredients = () => {
        
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    const isIngredientsLoading = useSelector(state => state.ingredientsReducer.isLoading);
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    
    useEffect(() => { 
        if(ingredients===null) {
            dispatch(allActions.loadingIngredientsAction());
            ( async function (){
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
                    const response = await fetch(url, {
                        headers: {
                             Accept: "application/json",
                        },
                    });
                    const ingredientsFromAPI = await response.json();
                    dispatch(allActions.ingredientsAction(ingredientsFromAPI.meals.sort(propComparator('strIngredient'))));
                } catch(error) {
                    dispatch(allActions.onErrorIngredientsAction());
                        console.log(error);
                }
            })();
        }
    }, [ingredients,dispatch]);

    return (
        <>
            <aside className="ingredients rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsLoading ? <Loader/> :
                    ( ingredients ?
                        (<> 
                            {ingredients.slice(0,10).map(ingredient => {
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
                                <Link to={`/ingredient/all`}>
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