import { useState } from "react";

const Sidebar = ({categories}) => {
 const [mealsByCategories, setMealsByCategories] = useState([]);
    const handleCategoryClick = async (event,cat) => {
        const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+cat;
       
        const response = await fetch(url, {
            headers: {
                Accept : 'application/json'
            }
        }
            )

            const categoriesFromAPI = await response.json();
            setMealsByCategories(categoriesFromAPI.meals);
    }
return (
    <>

   
    <aside>
        <h1>Toutes les catégories : </h1>
        {categories ?
            <> 
            {categories.map(category => {
                return(
                    <article>

                        <button
                        onClick={(e)=>handleCategoryClick(e,category.strCategory)}>
                            {category.strCategory}
                        </button>
                        
                    </article>
                )
            })
            } 
            </> 
            :   
            (
                <p>pas de categories</p>
            )
       }
    </aside>
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

export default Sidebar;