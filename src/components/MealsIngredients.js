import { useSelector } from "react-redux";
import IngredientCard from "./IngredientCard";
import Loader from "./Loader";


export default function MealsIngredients() {
    const currentMeal = useSelector(state => state.currentMealReducer.currentMeal);
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    const isCurrentMealLoading = useSelector(state => state.currentMealReducer.isLoading);
    let ingredientsViews=[];
    
        if(currentMeal && ingredients!=null){
            for(let iM=1;iM<13;iM++){
                if(currentMeal["strIngredient"+iM] && currentMeal["strIngredient"+iM]!=='' && currentMeal["strIngredient"+iM]!==null){
                    ingredientsViews.push(
                            <IngredientCard key={`m${iM}`} ing={currentMeal["strIngredient"+iM]} qty={currentMeal["strMeasure"+iM]}/>
                    );
                }else if (iM===1){
                    ingredientsViews.push(
                       <p>pas d'ingrédients</p>
                );
                }
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