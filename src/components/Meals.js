import { useState , useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Meals = () => {
    const [meal, setMeal] = useState(null);
    useEffect(() => {
       ( async function (){
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "applicaiton/json",
            },
            
        });
        const mealsFromAPI = await response.json();
        setMeal(mealsFromAPI.meals[0]);
    })()
    }, []);//tableau vide pour initialiser au premier chargement
    
    const handleClick = async (event) => {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "applicaiton/json",
            },
            
        });
        const mealsFromAPI = await response.json();
        setMeal(mealsFromAPI.meals[0]);
    };
    return (
        <><Header />
        <main>
        {meal ? (
            <article>
            <h1>{meal.strMeal}</h1>
            <p>{meal.strInstructions}</p>
            <img src={meal.strMealThumb}  alt={meal.strMeal}/>
            </article>
        ) : (
            <p>pas de recette</p>
        )}
        <button onClick={handleClick}>Afficher une recette</button>
        </main>
            <Sidebar />
        </>
    )
};
export default Meals;
