
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import AreaFlag from "../components/areas";
import Loader from "../components/Loader";
import MealsIngredients from "../components/MealsIngredients";
import Video from "../components/Video";
import { useGetCurrentMealQuery } from "../services/mealApi";
import { setCurrentMeal , setCurrentMealLoading , setCurrentMealError } from '../slices/currentMealSlice';

const Meal = () => {  
    const { strMeal } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetCurrentMealQuery(strMeal);
    const dispatch = useDispatch();

    if(isSuccess && data && data.meals && data.meals[0])dispatch(setCurrentMeal(data.meals[0]));
    if(isLoading)dispatch(setCurrentMealLoading());
    if(isError)dispatch(setCurrentMealError());
    
    return (
        <>
            {isLoading ? <Loader/> :
            (isSuccess && data && data.meals && data.meals[0] ? 
                (<>
                    {data.meals[0]?
                    <>
                    <article>
                        <div key={data.meals[0].idMeal} className="flex-grow-1 m-2">
                            <div className="d-flex card meal  flex-wrap flex-md-nowrap  g-0">
                                <img className="photo img-fluid rounded" src={data.meals[0].strMealThumb}  alt={data.meals[0].strMeal}/>
                                <div className="vignette card-body"><AreaFlag country={data.meals[0].strArea}/>
                                    <h3 className="card-title">{data.meals[0].strMeal}</h3>
                                    <p className="card-text fs-6">{data.meals[0].strInstructions}</p> 
                                    
                                </div>
                            </div>
                        </div>
                    </article>  
                    <div className="infos">
                        <MealsIngredients mealId={strMeal}/>
                        <Video youtubeLink={data.meals[0].strYoutube.toString()}/>
                    </div> 
                    </>
                    : (<article></article>)}
                </>
                ) : (
                <p>No Recipe</p>
                )
            )}
        </>
    )
};

export default Meal;
