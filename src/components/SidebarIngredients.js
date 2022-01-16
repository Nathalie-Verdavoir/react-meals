import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIngredientsMeal , setIngredientsMealLoading , setIngredientsMealError } from '../slices/ingredientsMealSlice';
import Loader from "./Loader";

const SidebarIngredients = () => {

    const { ingredientsMeal } = useSelector(state => state.ingredientsMeal);
    const { isIngredientsMealLoading } = useSelector(state => state.ingredientsMeal);
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    
    useEffect(() => { 
        if(ingredientsMeal===null) {
            dispatch(setIngredientsMealLoading());
            ( async function (){
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
                    const response = await fetch(url, {
                        headers: {
                             Accept: "application/json",
                        },
                    });
                    const ingredientsFromAPI = await response.json();
                    dispatch(setIngredientsMeal(ingredientsFromAPI.meals.sort(propComparator('strIngredient1'))));
                } catch(error) {
                    dispatch(setIngredientsMealError());
                    console.log(error);
                }
            })();
        }
    }, [ingredientsMeal,dispatch]);

    return (
        <>
            <aside className="ingredients rounded-3 my-2">
                <h4>All ingredients</h4>
                {isIngredientsMealLoading ? <Loader/> :
                    ( ingredientsMeal ?
                        (<> 
                            {ingredientsMeal.slice(0,10).map(ingredient => {
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