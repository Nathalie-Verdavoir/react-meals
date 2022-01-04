import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import { setMealsByCategories , setMealsByCategoriesLoading , setMealsByCategoriesError } from "../slices/mealsByCategoriesSlice";


const Category = () => {
    const { strCategory } = useParams();
    const [mealsByCategoriesComp, setMealsByCategoriesComp] = useState([]);
    const categories = useSelector(state => state.categoriesReducer.categories);
    const {mealsByCategories} = useSelector(state => state.mealsByCategories);
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
            setMealsByCategoriesComp(mealsByCat);
        }
        else if (mealsByCategories && mealsByCategories[strCategory] && categories!==null){
             setMealsByCategoriesComp(mealsByCategories[strCategory]);
        }else{
            ( async function (){  
                try {
                    dispatch(setMealsByCategoriesLoading());
                    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c="+strCategory;
                    const response = await fetch(url, {
                        headers: {
                            Accept : 'application/json'
                        }
                    }
                    )
                    const categoriesFromAPI = await response.json();
                    setMealsByCategoriesComp(categoriesFromAPI.meals);
                    dispatch(setMealsByCategories([categoriesFromAPI.meals,strCategory]));
                } catch(error) {
                    dispatch(setMealsByCategoriesError());
                    console.log(error);
                }
            })();
        }
    },[strCategory,categories,dispatch,mealsByCategories]);
    
    const allCat = strCategory==='all';
    const title = allCat ? `All categories of meals` : `Recipes of ${strCategory}`;
    
return (
    <>
    <Header/>
    <main className="d-flex col-12">
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
            <section className="row align-items-center g-0"> 
                {mealsByCategoriesComp ? (
                    <>
                    {mealsByCategoriesComp.map(meal => {
                        return(
                            <MealCard key={'MealCard'+meal.idMeal}  meal={meal} allCat={allCat} allIng={null}/>
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