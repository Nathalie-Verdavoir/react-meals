import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarIngredients from "../components/SidebarIngredients";


const Ingredient = ({ingredients,categories}) => {
   
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
    <Header categories={categories} ingredients={ingredients}/>
    <main className="container w-75 p-3"><h1>Receipes with {strIngredient}</h1>
    <section className="row align-items-center g-0"> 
  {mealsByIngredients ? (
      <>
      {mealsByIngredients.map((meal) => {
          return(
            <article className="d-flex flex-col col-4 p-0 m-0">
                <div key={meal.idMeal} className="card m-2">
                    <div className="row g-0">
                        <img className="vignette-photo img-fluid rounded-start" src={meal.strMealThumb}  alt={meal.strMeal}/>
                        <div className="vignette card-body p-2"> 
                            <h5 className="card-text small-card">{meal.strMeal}</h5>
                            <Link to={`/meals/${meal.idMeal}`} className="btn border position-absolute bottom-0 end-0 m-2 border-dark">Receipe</Link>
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
</section></main>  <Sidebar categories={categories.slice(0,8)} />
            <SidebarIngredients ingredients={ingredients.slice(0,8)} />
    </>
) 
}

export default Ingredient;