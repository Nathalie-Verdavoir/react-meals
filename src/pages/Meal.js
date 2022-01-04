import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AreaFlag from "../components/areas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import MealsIngredients from "../components/MealsIngredients";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";
import { setCurrentMeal , setCurrentMealLoading , setCurrentMealError } from '../slices/currentMealSlice';

const Meal = () => {

    const {currentMeal} = useSelector(state => state.currentMeal);
    const {isCurrentMealLoading} = useSelector(state => state.currentMeal);
    const dispatch = useDispatch();
    const { strMeal } = useParams();
    useEffect(() => {
        if(currentMeal===null || (currentMeal && !currentMeal[strMeal])){
            dispatch(setCurrentMealLoading());
            ( async function (){
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+strMeal;
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        }, 
                    });
                    const mealsFromAPI = await response.json();
                    dispatch(setCurrentMeal(mealsFromAPI.meals[0]));
                } catch(error) {
                    dispatch(setCurrentMealError());
                    console.log(error);
                }
            })();
        }
    }, [strMeal,dispatch,currentMeal]);
    
    return (
        <>
            <Header/>
            <main>
                {isCurrentMealLoading ? <Loader/> :
                (currentMeal ? 
                    (<>
                        {currentMeal[strMeal]?
                        <>
                        <article>
                            <div key={currentMeal[strMeal].idMeal} className="flex-grow-1 m-2">
                                <div className="d-flex card meal  flex-wrap flex-md-nowrap  g-0">
                                    <img className="photo img-fluid rounded" src={currentMeal[strMeal].strMealThumb}  alt={currentMeal[strMeal].strMeal}/>
                                    <div className="vignette card-body">  <AreaFlag country={currentMeal[strMeal].strArea}/>
                                        <h3 className="card-title">{currentMeal[strMeal].strMeal}</h3>
                                        <p className="card-text fs-6">{currentMeal[strMeal].strInstructions}</p> 
                                       
                                    </div>
                                </div>
                            </div>
                        </article>  
                        <div className="infos">
                            <MealsIngredients mealId={strMeal}/>
                            <Video youtubeLink={currentMeal[strMeal].strYoutube.toString()}/>
                        </div> 
                        </>
                        : (<article></article>)}
                    </>
                    ) : (
                    <p>No Recipe</p>
                    )
                )}
            </main>
            <Sidebar/>
            <Footer/>
        </>
    )
};

export default Meal;
