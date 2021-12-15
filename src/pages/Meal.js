import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = ({categories, ingredients}) => {
    const [meal, setMeal] = useState(null);
    const { strMeal } = useParams();
    useEffect(() => {
       ( async function (){
        const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+strMeal;
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const mealsFromAPI = await response.json();
        setMeal(mealsFromAPI.meals[0]);
    })();
    
    }, [strMeal]);//tableau vide pour initialiser au premier chargement
    
    
    return (
        <>
            <Header categories={categories} ingredients={ingredients}/>
            <main>
                {meal ? (
                    <article>
                       
                        <div key={meal.idMeal} className="card m-2">
                            <div className="row g-0">
                                <img className="photo img-fluid rounded-start" src={meal.strMealThumb}  alt={meal.strMeal}/>
                                <div className="vignette card-body"> 
                                    <h3 className="card-title">{meal.strMeal}</h3> 
                                    <p className="card-text fs-5">{meal.strInstructions}</p> 
                                </div>
                            </div>
                        </div>
                    </article>
                ) : (
                    <p>No Recipe</p>
                )}
            </main>
            <Sidebar categories={categories.slice(0,8)}  ingredients={ingredients.slice(0,8)} />
        </>
    )
};
export default Home;
