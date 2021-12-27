import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import DrinkCard from "../components/DrinkCard";

const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const [drinksByIngredients, setDrinksByIngredients] = useState([]);
    const ingredients = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
   useEffect (() => {
    if(strIngredient==='all' && ingredients){
        const drinksByIng = ingredients.map(ing => {
            return {
            idDrink : ing.idIngredient,
            strDrinkThumb : `https://www.thecocktaildb.com/images/ingredients/${ing.strIngredient}.png`,
            strDrink : ing.strIngredient,
            }
        })
        setDrinksByIngredients(drinksByIng);
    }
    else {
        (async () => {
                const url = "https://www.thedrinkdb.com/api/json/v1/1/filter.php?i="+strIngredient;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsFromAPI = await response.json();
                setDrinksByIngredients(ingredientsFromAPI.drinks);
            })();
    }
},[strIngredient,ingredients]);

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
</section></div><Sidebar/></main>  
<Footer/>
    </>
) 
}

export default Ingredient;