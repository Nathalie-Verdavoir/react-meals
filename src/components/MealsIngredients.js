import { useSelector } from "react-redux";
import IngredientCard from "./IngredientCard";
import Loader from "./Loader";


export default function MealsIngredients({mealId}) {
    const {currentMeal} = useSelector(state => state.currentMeal);
    const ingredientsMeal = useSelector(state => state.ingredientsMeal);
    const {isCurrentMealLoading} = useSelector(state => state.currentMeal);
    let ingredientsViews=[];
        if(currentMeal && currentMeal[mealId] && ingredientsMeal!=null){
            for(let iM=1;iM<13;iM++){
                if(currentMeal[mealId]["strIngredient"+iM] && currentMeal[mealId]["strIngredient"+iM]!=='' && currentMeal[mealId]["strIngredient"+iM]!==null){
                    ingredientsViews.push(
                            <IngredientCard key={`m${iM}`} ing={currentMeal[mealId]["strIngredient"+iM]} qty={currentMeal[mealId]["strMeasure"+iM]}/>
                    );
                }else if (iM===1){
                    ingredientsViews.push(
                       <p>pas d'ingrédients</p>
                );
                }
            }
      
        
    }

    


    return (
        <div className="ing-list col-12 col-md-8 container-fluid">
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