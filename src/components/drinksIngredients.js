import { useSelector } from "react-redux";
import IngredientCard from "./IngredientCard";
import Loader from "./Loader";


export default function DrinksIngredients() {
    const currentDrink = useSelector(state => state.currentDrinkReducer.currentDrink);
    const ingredients = useSelector(state => state.ingredientsDrinksReducer.ingredients);
    const isCurrentDrinkLoading = useSelector(state => state.currentDrinkReducer.isLoading);
    let ingredientsViews=[];
    
        if(currentDrink && ingredients!=null){
            for(let iM=1;iM<13;iM++){
                if(currentDrink["strIngredient"+iM] && currentDrink["strIngredient"+iM]!=='' && currentDrink["strIngredient"+iM]!==null){
                    ingredientsViews.push(
                            <IngredientCard key={`m${iM}`} ing={currentDrink["strIngredient"+iM]} qty={currentDrink["strMeasure"+iM]}/>
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
            {isCurrentDrinkLoading ? <Loader/> :
                (currentDrink ? 
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