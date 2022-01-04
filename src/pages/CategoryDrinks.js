import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import SidebarDrinks from "../components/SidebarDrinks";
import DrinkCard from "../components/DrinkCard";
import { setDrinksByCategories , setDrinksByCategoriesLoading , setDrinksByCategoriesError } from "../slices/drinksByCategoriesSlice";


const CategoryDrinks = () => {
    const { strCategory } = useParams();
    const [drinksByCategoriesComp, setDrinksByCategoriesComp] = useState([]);
    const { categoriesDrink } = useSelector(state => state.categoriesDrink);
    const {drinksByCategories} = useSelector(state => state.drinksByCategories);
    
    const dispatch = useDispatch();
    useEffect (() => {
        if(strCategory==='all' && categoriesDrink!==null){
            const drinksByCat = categoriesDrink.map(cat => {
                return {
                idDrink : cat.strCategory,
                strDrink : cat.strCategory,
                }
            })
            setDrinksByCategoriesComp(drinksByCat);
        }else if (drinksByCategories && drinksByCategories[strCategory] && categoriesDrink!==null){
            setDrinksByCategoriesComp(drinksByCategories[strCategory]);
        }else {
            ( async function (){  
                try {
                    dispatch(setDrinksByCategoriesLoading());
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c="+strCategory;
                    const response = await fetch(url, {
                        headers: {
                            Accept : 'application/json'
                        }
                    }
                    )
                    const categoriesDrinksFromAPI = await response.json();
                    setDrinksByCategoriesComp(categoriesDrinksFromAPI.drinks);
                    dispatch(setDrinksByCategories([categoriesDrinksFromAPI.drinks,strCategory]));
                } catch(error) {
					dispatch(setDrinksByCategoriesError());
                    console.log(error);
                }
             })();
        }
    },[strCategory,categoriesDrink,dispatch,drinksByCategories]);
    
    const allCat = strCategory==='all';
    const title = allCat ? `All categories of drinks` : `Recipes of ${strCategory}`;
    
return (
    <>
    <Header/>
    <main className="d-flex col-12">
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
            <section className="row align-items-center g-0"> 
                {drinksByCategoriesComp ? (
                    <>
                    {drinksByCategoriesComp.map(drink => {
                        return(
                            <DrinkCard key={'DrinkCard'+drink.idDrink}  drink={drink} allCat={allCat} allIng={null}/>
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