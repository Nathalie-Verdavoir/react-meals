import { useSelector } from "react-redux";
import IngredientCard from "./IngredientCard";
import Loader from "./Loader";


export default function MealsIngredients({ing}) {
    const currentMeal = useSelector(state => state.currentMealReducer.currentMeal);
    const isCurrentMealLoading = useSelector(state => state.currentMealReducer.isLoading);
    const ingredientsViews =[];
    for(let i=1;i<13;i++){
        if(currentMeal["strIngredient"+i] && currentMeal["strIngredient"+i]!=='' && currentMeal["strIngredient"+i]!==null){
            ingredientsViews.push(
                    <IngredientCard key={i} ing={currentMeal["strIngredient"+i]} qty={currentMeal["strMeasure"+i]}/>
            );
        }else if (i===1){
            ingredientsViews.push(
               <p>pas d'ingrédients</p>
        );
        }
       

    }
    return (
        <div className="ing-list col-8 container-fluid">
            <div className="d-flex flex-row flex-wrap">
            {isCurrentMealLoading ? <Loader/> :
                (currentMeal ? 
                    (
                        ingredientsViews
                    ) : (
                    <p>No Recipe</p>
                    )
                )}
                </div>
        </div>
    )
}