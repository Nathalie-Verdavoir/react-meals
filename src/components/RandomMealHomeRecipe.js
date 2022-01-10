import { useDispatch } from "react-redux";
import RecipeButton from "./RecipeButton";
import { setCurrentMeal , setCurrentMealLoading , setCurrentMealError } from '../slices/currentMealSlice'
import { useGetRandomMealQuery } from "../services/mealApi";


export const RandomMealHomeRecipe = (up) => {
    const dispatch = useDispatch();
    const { data,  isLoading, isSuccess, isError } = useGetRandomMealQuery(up);
    
        if(isSuccess && data && data.meals && data.meals[0])dispatch(setCurrentMeal(data.meals[0]));
        if(isLoading)dispatch(setCurrentMealLoading());
        if(isError)dispatch(setCurrentMealError());
    
    return (
        <>
            {isSuccess && data && data.meals && data.meals[0] ? (
                <article>
                    <div key={data.meals[0].idMeal} className="card flex-grow-1 m-2">
                        <div className="d-flex  flex-wrap flex-md-nowrap g-0">
                            <img className="photo img-fluid rounded" src={data.meals[0].strMealThumb}  alt={data.meals[0].strMeal}/>
                            <div className="vignette card-body"> 
                                <h3 className="card-title">{data.meals[0].strMeal}</h3> 
                                <p className="card-text fs-5">{data.meals[0].strInstructions.slice(0,850)+'...'}</p> 
                                <RecipeButton urlTo={`/meal/${data.meals[0].idMeal}`} titleButton={'Recipe'}/>
                            </div>
                        </div>
                    </div>
                </article>
            ) : (
                <p>No Recipe</p>
            )}
        </>
    )
}
