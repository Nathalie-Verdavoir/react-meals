import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import RecipeButton from "../components/RecipeButton";
import defaultimg from "../img/defaultimg.png";

const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const [mealsByIngredients, setMealsByIngredients] = useState([]);
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
   useEffect (() => {
    if(strIngredient==='all' && ingredients){
        const mealsByIng = ingredients.map(ing => {
            return {
            idMeal : ing.idIngredient,
            strMealThumb : `https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`,
            strMeal : ing.strIngredient,
            }
        })
        setMealsByIngredients(mealsByIng);
    }
    else {
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
    }
},[strIngredient,ingredients]);

const allIng = strIngredient==='all';
const title = allIng ? `All ingredients` : `Recipes with ${strIngredient}`;
const titleButton = allIng ? `All recipes` : `Recipe`;
const propsButtons = meal => {
    const urlTo = allIng ? `/ingredient/${meal.strMeal}` : `/meal/${meal.idMeal}`;
    return (<RecipeButton urlTo={urlTo} titleButton={titleButton}/>)
}                       

return (
    <>
    <Header/>
    <main className="container w-75 p-3"><h1>{title}</h1>
    <section className="row align-items-center g-0"> 
  {mealsByIngredients ? (
      <>
      {mealsByIngredients.map((meal) => {
          return(
            <article key={meal.idMeal} className="d-flex flex-col col-4 p-0 m-0">
                <div className="card m-2">
                    <div className="row g-0">
                        <img 
                        className="vignette-photo img-fluid rounded-start" 
                        src={meal.strMealThumb}  
                        onError={(event)=>event.target.setAttribute("src",defaultimg)}
                        alt={meal.strMeal}/>
                        <div className="vignette card-body p-2"> 
                            <h5 className="card-text small-card">{meal.strMeal.length>35?(meal.strMeal.slice(0,35) + '...') : meal.strMeal}</h5>
                            {propsButtons(meal)}
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