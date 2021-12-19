import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";


const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const [mealsByIngredients, setMealsByIngredients] = useState([]);
   
   useEffect (() => {
   (async () => {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+strIngredient;
       
        const response = await fetch(url, {
            headers: {
                Accept : 'application/json'
            }
        }
            )

            const ingredientsFromAPI = await response.json();
            setMealsByIngredients(ingredientsFromAPI.meals);
    })();
    
},[strIngredient]);

return (
    <>
    <Header/>
    <main className="container w-75 p-3"><h1>Recipes with {strIngredient}</h1>
    <section className="row align-items-center g-0"> 
  {mealsByIngredients ? (
      <>
      {mealsByIngredients.map((meal) => {
          return(
            <article key={meal.idMeal} className="d-flex flex-col col-4 p-0 m-0">
                <div className="card m-2">
                    <div className="row g-0">
                        <img className="vignette-photo img-fluid rounded-start" src={meal.strMealThumb}  alt={meal.strMeal}/>
                        <div className="vignette card-body p-2"> 
                            <h5 className="card-text small-card">{meal.strMeal.length>35?(meal.strMeal.slice(0,35) + '...') : meal.strMeal}</h5>
                            <Link to={`/meal/${meal.idMeal}`} className="btn border position-absolute bottom-0 end-0 m-2 border-dark">Recipe</Link>
                            {meal.strInstructions}
                        </div>
                    </div>
                </div>
            </article>
            )
          }
        )
      }
        </>   
        ) : (<p>pas de recette</p>)
        }
</section></main>  
<Sidebar/>
    </>
) 
}

export default Ingredient;