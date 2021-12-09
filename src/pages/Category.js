import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Category = ({categories}) => {

    const { strCategory } = useParams();
    const [mealsByCategories, setMealsByCategories] = useState([]);
   
   useEffect (() => {
   (async () => {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+strCategory;
       
        const response = await fetch(url, {
            headers: {
                Accept : 'application/json'
            }
        }
            )

            const categoriesFromAPI = await response.json();
            setMealsByCategories(categoriesFromAPI.meals);
    })();
    
},[strCategory]);

return (
    <>

   
    <Header categories={categories}/>
    <section>
  {mealsByCategories ? (
      <>
      {mealsByCategories.map((meal) => {
          return(
           <article id={meal.idMeal}>
            
            
            <div className="vignette">
                <h1>{meal.strMeal}</h1>
                <img className="vignette-photo" src={meal.strMealThumb}  alt={meal.strMeal}/>
                {meal.strInstructions}
            </div>
            
            </article>
            )
          }
        )
      }
           
        </>) : (<p>pas de recette</p>)
        }
</section>
    </>
) 
}

export default Category;