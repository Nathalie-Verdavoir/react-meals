import { useSelector } from "react-redux";
import DrinksIngredientsCard from "./DrinksIngredientsCard";
import Loader from "./Loader";


export default function DrinksIngredients({drinkId}) {
    const {currentDrink} = useSelector(state => state.currentDrink);
    const { ingredientsDrink } = useSelector(state => state.ingredientsDrink);
    const {isCurrentDrinkLoading} = useSelector(state => state.currentDrink);
    let ingredientsViews=[];
        if(currentDrink && currentDrink[drinkId] && ingredientsDrink!==null){
            for(let iM=1;iM<15;iM++){ 
                if(currentDrink[drinkId]["strIngredient"+iM] && currentDrink[drinkId]["strIngredient"+iM]!=='' && currentDrink[drinkId]["strIngredient"+iM]!==null){
                    ingredientsViews.push(
                            <DrinksIngredientsCard key={`m${iM}`} ing={currentDrink[drinkId]["strIngredient"+iM]} qty={currentDrink[drinkId]["strMeasure"+iM]}/>
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
            {isCurrentDrinkLoading ? <Loader/> :
                (currentDrink && currentDrink[drinkId] && ingredientsViews ? 
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