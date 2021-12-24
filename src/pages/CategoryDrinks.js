import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import SidebarDrinks from "../components/SidebarDrinks";
import DrinkCard from "../components/DrinkCard";

const CategoryDrinks = () => {
    const { strCategory } = useParams() //.toString().replace('/','\\/');
    console.log(strCategory);
    const [drinksByCategories, setDrinksByCategories] = useState([]);
    const categoriesDrinks = useSelector(state => state.categoriesDrinksReducer.categoriesDrinks);
    useEffect (() => {
        if(strCategory==='all' && categoriesDrinks){
            const drinksByCat = categoriesDrinks.map(cat => {
                return {
                idDrink : cat.idCategory,
                strDrinkThumb : cat.strCategoryThumb,
                strDrink : cat.strCategory,
                }
            })
            setDrinksByCategories(drinksByCat);
        }
        else {
            (async () => {
                const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+strCategory;
                const response = await fetch(url, {
                     headers: {
                         Accept : 'application/json'
                     }
                 }
                )
                const categoriesDrinksFromAPI = await response.json();
                setDrinksByCategories(categoriesDrinksFromAPI.drinks);
             })();
        }
    },[strCategory,categoriesDrinks]);
    
    const allCat = strCategory==='all';
    const title = allCat ? `All categories` : `Recipes with ${strCategory}`;
    
return (
    <>
    <Header/>
    <main className="d-flex col-12">
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
            <section className="row align-items-center g-0"> 
                {drinksByCategories ? (
                    <>
                    {drinksByCategories.map(drink => {
                        return(
                            <DrinkCard key={drink.idDrink}  drink={drink} allCat={allCat} allIng={null}/>
                            )
                        }
                        )
                    }
                        </>   
                ) : (<p>pas de recette</p>)
                }
        </section>
        </div>
        
        <SidebarDrinks />
    </main>  
    
    <Footer/> 
    
    </>
) 
}

export default CategoryDrinks;