import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import DrinkCard from "../components/DrinkCard";
import SidebarDrinks from "../components/SidebarDrinks";
import { setDrinksByIngredients , setDrinksByIngredientsLoading , setDrinksByIngredientsError } from '../slices/drinksByIngredientsSlice';

const IngredientsDrinks = () => {
   
    const { strIngredientsDrinks } = useParams();
    const [drinksByIngredientsComp, setDrinksByIngredientsComp] = useState([]);
    const ingredientsDrinks = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
    const {drinksByIngredients} = useSelector(state => state.drinksByIngredients);
    const dispatch = useDispatch();
   useEffect (() => {
    if(strIngredientsDrinks==='all' && ingredientsDrinks){
        const drinksByIng = ingredientsDrinks.map(ing => {
            return {
            idDrink : ing.strIngredient1,
            strDrinkThumb :"https://www.thecocktaildb.com/images/ingredients/"+ing.strIngredient1+".png",
            }
        })
        setDrinksByIngredientsComp(drinksByIng);
    }else if (drinksByIngredients && drinksByIngredients[strIngredientsDrinks] && ingredientsDrinks!==null){
        setDrinksByIngredientsComp(drinksByIngredients[strIngredientsDrinks]);
   }
    else if(strIngredientsDrinks!=='all' && ingredientsDrinks!=null){
        ( async function (){  
            try {
                dispatch(setDrinksByIngredientsLoading());
                const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+strIngredientsDrinks;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsDrinksFromAPI = await response.json();
                setDrinksByIngredientsComp(ingredientsDrinksFromAPI.drinks);
                dispatch(setDrinksByIngredients([ingredientsDrinksFromAPI.drinks,strIngredientsDrinks]));
            } catch(error) {
                dispatch(setDrinksByIngredientsError());
                console.log(error);
            }
        })();
    }
},[strIngredientsDrinks,ingredientsDrinks,dispatch,drinksByIngredients]);

const allIng = strIngredientsDrinks==='all';
const title = allIng ? `All ingredients of drinks` : `Recipes with ${strIngredientsDrinks}`;                      

return (
    <>
    <Header/>
    <main className="d-flex col-12">
        
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
    <section className="row align-items-center g-0"> 
  {drinksByIngredientsComp ? (
      <>
      {drinksByIngredientsComp.map(drink => {
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