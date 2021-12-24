import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import DrinkCard from "../components/DrinkCard";
import SidebarDrinks from "../components/SidebarDrinks";

const IngredientsDrinks = () => {
   
    const { strIngredient } = useParams();
    const [drinksByIngredients, setDrinksByIngredients] = useState([]);
    const ingredientsDrinks = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
   useEffect (() => {
    if(strIngredient==='all' && ingredientsDrinks){
        const drinksByIng = ingredientsDrinks.map(ing => {
            return {
            idDrink : ing.idIngredient,
            strDrinkThumb : ing.strDrinkThumb,
            strDrink : ing.strIngredient,
            }
        })
        setDrinksByIngredients(drinksByIng);
    }
    else {
        (async () => {
                const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+strIngredient;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsDrinksFromAPI = await response.json();
                setDrinksByIngredients(ingredientsDrinksFromAPI.drinks);
            })();
    }
},[strIngredient,ingredientsDrinks]);

const allIng = strIngredient==='all';
const title = allIng ? `All ingredients` : `Recipes with ${strIngredient}`;                      

return (
    <>
    <Header/>
    <main className="d-flex col-12">
        
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
    <section className="row align-items-center g-0"> 
  {drinksByIngredients ? (
      <>
      {drinksByIngredients.map((drink) => {
          return(
            <DrinkCard key={drink.idDrink}  drink={drink} allCat={null} allIng={allIng}/>
            )
          }
        )
      }
        </>   
        ) : (<p>pas de recette</p>)
        }
</section></div><SidebarDrinks/></main>  
<Footer/>
    </>
) 
}

export default IngredientsDrinks;