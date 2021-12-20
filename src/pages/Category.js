import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RecipeButton from "../components/RecipeButton";
import { useSelector } from "react-redux";

const Category = () => {
    const { strCategory } = useParams();
    const [mealsByCategories, setMealsByCategories] = useState([]);
    const categories = useSelector(state => state.categoriesReducer.categories);
    useEffect (() => {
        if(strCategory==='all' && categories){
            const mealsByCat = categories.map(cat => {
                return {
                idMeal : cat.idCategory,
                strMealThumb : cat.strCategoryThumb,
                strMeal : cat.strCategory,
                }
            })
            setMealsByCategories(mealsByCat);
        }
        else {
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
        }
    },[strCategory,categories]);
    
    const allCat = strCategory==='all';
    const title = allCat ? `All categories` : `Recipes with ${strCategory}`;
    const titleButton = allCat ? `All recipes` : `Recipe`;
    const propsButtons = meal => {
        const urlTo = allCat ? (`/category/${meal.strMeal}`) : (`/meal/${meal.idMeal}`);
        return (<RecipeButton urlTo={urlTo} titleButton={titleButton}/>)
    }    
  

return (
    <>
    <Header/>
    <main className="container w-75 p-3">
        <h1>{title}</h1>
            <section className="row align-items-center g-0"> 
                {mealsByCategories ? (
                    <>
                    {mealsByCategories.map((meal) => {
                        return(
                            <article key={meal.idMeal} className="d-flex flex-col col-4 p-0 m-0">
                                <div className="card m-2">
                                    <div className="row g-0">
                                        <img className="vignette-photo img-fluid rounded-start" src={meal.strMealThumb}  alt={meal.strMeal}/>
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
        </section>
    </main>  
    <Sidebar />
            
    
    </>
) 
}

export default Category;