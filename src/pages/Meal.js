import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allActions from "../actions/allActions";
import AreaFlag from "../components/areas";
import Header from "../components/Header";
import Loader from "../components/Loader";
import MealsIngredients from "../components/MealsIngredients";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const Home = () => {

    const currentMeal = useSelector(state => state.currentMealReducer.currentMeal);
    const isCurrentMealLoading = useSelector(state => state.currentMealReducer.isLoading);
    const dispatch = useDispatch();
    const { strMeal } = useParams();
    useEffect(() => {
        if(currentMeal===null || (currentMeal && currentMeal.idMeal!==strMeal)){
            dispatch(allActions.loadingCurrentMealAction());
            ( async function (){
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+strMeal;
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        }, 
                    });
                    const mealsFromAPI = await response.json();
                    dispatch(allActions.currentMealAction(mealsFromAPI.meals[0]));
                } catch(error) {
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
                        <article>
                        
                            <div key={currentMeal.idMeal} className="card meal m-2">
                                <div className="row g-0">
                                    <img className="photo img-fluid rounded-start" src={currentMeal.strMealThumb}  alt={currentMeal.strMeal}/>
                                    <div className="vignette card-body">  <AreaFlag country={currentMeal.strArea}/>
                                        <h3 className="card-title">{currentMeal.strMeal}</h3>
                                        <p className="card-text fs-6">{currentMeal.strInstructions}</p> 
                                       
                                    </div>
                                </div>
                            </div>
                        </article> 
                        <div className="infos">
                            <MealsIngredients/>
                            <Video youtubeLink={currentMeal.strYoutube.toString()}/>
                        </div>
                        
                        </>
                    ) : (
                    <p>No Recipe</p>
                    )
                )}
            </main>
            <Sidebar/>
        </>
    )
};

export default Home;
