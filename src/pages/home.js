import { useState , useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Home = ({categories}) => {
    const [meal, setMeal] = useState(null);
   
    useEffect(() => {
       ( async function (){
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const mealsFromAPI = await response.json();
        setMeal(mealsFromAPI.meals[0]);
    })();

    
    }, []);//tableau vide pour initialiser au premier chargement
    
    const handleClick = async (event) => {
        const url = "https://www.themealdb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const mealsFromAPI = await response.json();
        setMeal(mealsFromAPI.meals[0]);
    };
    return (
        <><Header categories={categories}/>
        <main>
        {meal ? (
            <article><button onClick={handleClick}>Afficher une autre recette</button>
            <h1>{meal.strMeal}</h1>
            <img className="photo" src={meal.strMealThumb}  alt={meal.strMeal}/>
            <p className="meal-photo-text">{meal.strInstructions}</p>
            
            </article>
        ) : (
            <p>pas de recette</p>
        )}
        
        </main>
            <Sidebar categories={categories} />
        </>
    )
};
export default Home;
