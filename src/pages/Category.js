import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import allActions from "../actions/allActions";

const Category = () => {
    const { strCategory } = useParams();
    const [mealsByCategories, setMealsByCategories] = useState([]);
    const categories = useSelector(state => state.categoriesReducer.categories);
    const mealsByCategoriesState = useSelector(state => state.mealsByCategoriesReducer.mealsByCategories);
    
    const dispatch = useDispatch();
    useEffect (() => {
        if(strCategory==='all' && categories!==null){
            const mealsByCat = categories.map(cat => {
                return {
                idMeal : cat.idCategory,
                strMealThumb : cat.strCategoryThumb,
                strMeal : cat.strCategory,
                }
            })
            setMealsByCategories(mealsByCat);
        }
        else if (mealsByCategoriesState && mealsByCategoriesState[strCategory] && categories!==null){
             setMealsByCategories(mealsByCategoriesState[strCategory]);
        }else{
            ( async function (){  
                try {
                    dispatch(allActions.loadingMealsByCategoriesAction());
                    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+strCategory;
                    const response = await fetch(url, {
                        headers: {
                            Accept : 'application/json'
                        }
                    }
                    )
                    const categoriesFromAPI = await response.json();
                    setMealsByCategories(categoriesFromAPI.meals);
                    dispatch(allActions.mealsByCategoriesAction([categoriesFromAPI.meals,strCategory]));
                } catch(error) {
                    dispatch(allActions.onErrorMealsByCategoriesAction());
                    console.log(error);
                }
            })();
        }
    },[strCategory,categories,dispatch,mealsByCategoriesState]);
    
    const allCat = strCategory==='all';
    const title = allCat ? `All categories` : `Recipes with ${strCategory}`;
    
return (
    <>
    <Header/>
    <main className="d-flex col-12">
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
            <section className="row align-items-center g-0"> 
                {mealsByCategories ? (
                    <>
                    {mealsByCategories.map(meal => {
                        return(
                            <MealCard key={meal.idMeal}  meal={meal} allCat={allCat} allIng={null}/>
                            )
                        }
                        )
                    }
                        </>   
                ) : (<p>pas de recette</p>)
                }
        </section>
        </div>
        
        <Sidebar />
    </main>  
    
    <Footer/> 
    
    </>
) 
}

export default Category;