import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import DrinkCard from "../components/DrinkCard";
import SidebarDrinks from "../components/SidebarDrinks";
import allActions from "../actions/allActions";

const IngredientsDrinks = () => {
   
    const { strIngredientsDrinks } = useParams();
    const [drinksByIngredients, setDrinksByIngredients] = useState([]);
    const ingredientsDrinks = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
    const drinksByIngredientsState = useSelector(state => state.drinksByIngredientsReducer.drinksByIngredients);
    const dispatch = useDispatch();
   useEffect (() => {
    if(strIngredientsDrinks==='all' && ingredientsDrinks){
        const drinksByIng = ingredientsDrinks.map(ing => {
            return {
            idDrink : ing.strIngredient1,
            strDrinkThumb :"https://www.thecocktaildb.com/images/ingredients/"+ing.strIngredient1+".png",
            }
        })
        setDrinksByIngredients(drinksByIng);
    }else if (drinksByIngredientsState && drinksByIngredientsState[strIngredientsDrinks] && ingredientsDrinks!==null){
        setDrinksByIngredients(drinksByIngredientsState[strIngredientsDrinks]);
   }
    else if(strIngredientsDrinks!=='all' && ingredientsDrinks!=null){
        ( async function (){  
            try {
                dispatch(allActions.loadingDrinksByIngredientsAction());
                const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+strIngredientsDrinks;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsDrinksFromAPI = await response.json();
                setDrinksByIngredients(ingredientsDrinksFromAPI.drinks);
                dispatch(allActions.drinksByIngredientsAction([ingredientsDrinksFromAPI.drinks,strIngredientsDrinks]));
            } catch(error) {
                dispatch(allActions.onErrorDrinksByIngredientsAction());
                console.log(error);
            }
        })();
    }
},[strIngredientsDrinks,ingredientsDrinks,dispatch,drinksByIngredientsState]);

const allIng = strIngredientsDrinks==='all';
const title = allIng ? `All ingredients` : `Recipes with ${strIngredientsDrinks}`;                      

return (
    <>
    <Header/>
    <main className="d-flex col-12">
        
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
    <section className="row align-items-center g-0"> 
  {drinksByIngredients ? (
      <>
      {drinksByIngredients.map(drink => {
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