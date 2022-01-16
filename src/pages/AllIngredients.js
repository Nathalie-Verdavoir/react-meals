import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MealCard from "../components/MealCard";

const AllIngredients = () => {
    const [mealsByCategoriesComp, setMealsByCategoriesComp] = useState([]);
    const { ingredientsMeal } = useSelector(state => state.ingredientsMeal);
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    useEffect (() => {
        if( ingredientsMeal!==null){
            const mealsByCat = ingredientsMeal.slice().sort(propComparator('strIngredient')).map(cat => {
                return {
                idMeal : cat.idIngredient,
                strMealThumb : "https://www.themealdb.com/images/ingredients/"+cat.strIngredient+".png",
                strMeal : cat.strIngredient,
                }
            })
            setMealsByCategoriesComp(mealsByCat);
        }
    },[ingredientsMeal]);
    
return (
    <>
        <h1>All ingredients of meals</h1>
            <section className="row align-items-center g-0"> 
            {mealsByCategoriesComp ? (
                <>
                {mealsByCategoriesComp.map(meal => {
                    return(
                        <MealCard key={'MealCard'+meal.idMeal}  meal={meal}  allIng={true}/>
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

export default AllIngredients;