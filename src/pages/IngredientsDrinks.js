import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import DrinkCard from "../components/DrinkCard";
import { setDrinksByIngredients , setDrinksByIngredientsLoading , setDrinksByIngredientsError } from '../slices/drinksByIngredientsSlice';
import { useGetDrinksByIngredientsQuery } from "../services/drinkApi";

const IngredientsDrink = () => {
   
    const { strIngredientsDrinks } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetDrinksByIngredientsQuery(strIngredientsDrinks);
    const dispatch = useDispatch();

    if(isSuccess && data && data.drinks)dispatch(setDrinksByIngredients([data.drinks,strIngredientsDrinks]));
    if(isLoading)dispatch(setDrinksByIngredientsLoading());
    if(isError)dispatch(setDrinksByIngredientsError());
    
return (
    <>
        <h1>{`Recipes with ${strIngredientsDrinks}`}</h1>
        <section className="row align-items-center g-0"> 
            {isSuccess && data && data.drinks ? (
                <>
                {data.drinks.map(drink => {
                    return(
                        <DrinkCard key={drink.idDrink}  drink={drink} allIng={false}/>
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

export default IngredientsDrink;