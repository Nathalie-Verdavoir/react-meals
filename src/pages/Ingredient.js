import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import MealCard from "../components/MealCard";
import { setMealsByIngredients , setMealsByIngredientsLoading , setMealsByIngredientsError } from '../slices/mealsByIngredientsSlice';
import { useGetMealsByIngredientsQuery } from "../services/mealApi";

const Ingredient = () => {
   
    const { strIngredient } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetMealsByIngredientsQuery(strIngredient);
    const dispatch = useDispatch();

    if(isSuccess && data && data.meals)dispatch(setMealsByIngredients([data.meals,strIngredient]));
    if(isLoading)dispatch(setMealsByIngredientsLoading());
    if(isError)dispatch(setMealsByIngredientsError());

return (
    <>
        <h1>{`Recipes with ${strIngredient}`}</h1>
        <section className="row align-items-center g-0"> 
            {isSuccess && data && data.meals ? (
                <>
                    {data.meals.map((meal) => {
                        return(
                            <MealCard key={meal.idMeal}  meal={meal} allIng={false}/>
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