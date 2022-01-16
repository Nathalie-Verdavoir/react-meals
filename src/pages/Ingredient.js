import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MealCard from "../components/MealCard";
import { setMealsByIngredients , setMealsByIngredientsLoading , setMealsByIngredientsError } from '../slices/mealsByIngredientsSlice';

const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const [mealsByIngredientsComp, setMealsByIngredientsComp] = useState([]);
    const ingredientsMeal = useSelector(state => state.ingredientsMeal);
    const {mealsByIngredients} = useSelector(state => state.mealsByIngredients);
    const dispatch = useDispatch();
   useEffect (() => {
    if(strIngredient==='all' && ingredientsMeal){
        const mealsByIng = ingredientsMeal.map(ing => {
            return {
            idMeal : ing.idIngredient,
            strMealThumb : `https://www.themealdb.com/images/ingredients/${ing.strIngredient}.png`,
            strMeal : ing.strIngredient,
            }
        })
        setMealsByIngredientsComp(mealsByIng);
    }else if (mealsByIngredients && mealsByIngredients[strIngredient] && ingredientsMeal!==null){
        setMealsByIngredientsComp(mealsByIngredients[strIngredient]);
    }
    else {
        ( async function (){  
            try {
                dispatch(setMealsByIngredientsLoading());
                const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i="+strIngredient;
                const response = await fetch(url, {
                    headers: {
                        Accept : 'application/json'
                    }
                }
                )
                const ingredientsFromAPI = await response.json();
                setMealsByIngredientsComp(ingredientsFromAPI.meals);
                dispatch(setMealsByIngredients([ingredientsFromAPI.meals,strIngredient]));
            } catch(error) {
                dispatch(setMealsByIngredientsError());
                console.log(error);
            }
        })();
    }
},[strIngredient,ingredientsMeal,dispatch,mealsByIngredients]);

const allIng = strIngredient==='all';
const title = allIng ? `All ingredients of meals` : `Recipes with ${strIngredient}`;                      

return (
    <>
        <h1>{title}</h1>
        <section className="row align-items-center g-0"> 
            {mealsByIngredientsComp ? (
                <>
                    {mealsByIngredientsComp.map((meal) => {
                        return(
                            <MealCard key={meal.idMeal}  meal={meal} allCat={null} allIng={allIng}/>
                            )
                        }
                        )
                    }
                </>   
            ) : (<p>pas de recette</p>)
            }
        </section>
    </>
) 
}

export default Ingredient;