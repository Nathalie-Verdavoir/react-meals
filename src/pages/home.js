import { useState , useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Home = () => {
    const [meal, setMeal] = useState(null);
    const [categories, setCategories] = useState([]);
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

    ( async function (){
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const categoriesFromAPI = await response.json();
        setCategories(categoriesFromAPI.categories);
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
            <article>
            <h1>{meal.strMeal}</h1>
            <img className="photo" src={meal.strMealThumb}  alt={meal.strMeal}/>
            <p className="meal-photo-text">{meal.strInstructions}</p>
            
            </article>
        ) : (
            <p>pas de recette</p>
        )}
        <button onClick={handleClick}>Afficher une recette</button>
        </main>
            <Sidebar categories={categories} />
        </>
    )
};
export default Home;
