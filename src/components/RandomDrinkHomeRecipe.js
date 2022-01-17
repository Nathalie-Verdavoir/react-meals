import { useDispatch } from "react-redux";
import { useGetRandomDrinkQuery } from "../services/drinkApi";
import { setCurrentDrink , setCurrentDrinkLoading , setCurrentDrinkError } from '../slices/currentDrinkSlice';
import RecipeButton from "./RecipeButton";


export const RandomDrinkHomeRecipe = (up) => {
   const dispatch = useDispatch(); 
   const { data,  isLoading, isSuccess, isError } = useGetRandomDrinkQuery(up);
    
        if(isSuccess && data && data.drinks && data.drinks[0])dispatch(setCurrentDrink(data.drinks[0]));
        if(isLoading)dispatch(setCurrentDrinkLoading());
        if(isError)dispatch(setCurrentDrinkError());
    
    const wrapped = window.location.href.match("HomeDrinks") ? "d-flex flex-wrap  flex-md-nowrap g-0" : "d-flex flex-wrap g-0";
    
    return (
        <>
            {isSuccess && data && data.drinks && data.drinks[0] ? (
                <article>
                    <div key={data.drinks[0].idDrink} className="card bg-photo-drink flex-grow-1 m-2">
                        <div className={wrapped}>
                            <img className="photo img-thumbnail mx-auto rounded" src={data.drinks[0].strDrinkThumb}  alt={data.drinks[0].strDrink}/>
                            <div className="vignette card-body"> 
                                <h3 className="card-title">{data.drinks[0].strDrink} ({data.drinks[0].strAlcoholic})</h3>  
                                <p className="card-text fs-5">Category : {data.drinks[0].strCategory}</p>
                                <p className="card-text fs-5">{data.drinks[0].strInstructions}</p>
                                <RecipeButton urlTo={`/drink/${data.drinks[0].idDrink}`} titleButton={'Recipe'}/>
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