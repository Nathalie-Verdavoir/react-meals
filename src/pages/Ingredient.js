import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import allActions from "../actions/allActions";

const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const [mealsByIngredients, setMealsByIngredients] = useState([]);
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    const mealsByIngredientsState = useSelector(state => state.mealsByIngredientsReducer.mealsByIngredients);
    const dispatch = useDispatch();
   useEffect (() => {
    if(strIngredient==='all' && ingredients){
        const mealsByIng = ingredients.map(ing => {
            return {
            idMeal : ing.idIngredient,
            strMealThumb : `https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`,
            strMeal : ing.strIngredient,
            }
        })
        setMealsByIngredients(mealsByIng);
    }else if (mealsByIngredientsState && mealsByIngredientsState[strIngredient] && ingredients!==null){
        setMealsByIngredients(mealsByIngredientsState[strIngredient]);
   }
    else {
        ( async function (){  
            try {dispatch(allActions.loadingMealsByIngredientsAction());
                    
                const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+strIngredient;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsFromAPI = await response.json();
                setMealsByIngredients(ingredientsFromAPI.meals);
                dispatch(allActions.mealsByIngredientsAction([ingredientsFromAPI.meals,strIngredient]));
            } catch(error) {
                dispatch(allActions.onErrorMealsByIngredientsAction());
                console.log(error);
            }
        })();
    }
},[strIngredient,ingredients,dispatch,mealsByIngredientsState]);

const allIng = strIngredient==='all';
const title = allIng ? `All ingredients` : `Recipes with ${strIngredient}`;                      

return (
    <>
    <Header/>
    <main className="d-flex col-12">
        
    <div className="col-12 col-md-10">
        <h1>{title}</h1>
    <section className="row align-items-center g-0"> 
  {mealsByIngredients ? (
      <>
      {mealsByIngredients.map((meal) => {
          return(
            <MealCard key={meal.idMeal}  meal={meal} allCat={null} allIng={allIng}/>
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