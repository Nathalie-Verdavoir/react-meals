import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MealCard from "../components/MealCard";

const AllCategory = () => {
    const [mealsByCategoriesComp, setMealsByCategoriesComp] = useState([]);
    const { categoriesMeal } = useSelector(state => state.categoriesMeal);

    useEffect (() => {
        if( categoriesMeal!==null){
            const mealsByCat = categoriesMeal.map(cat => {
                return {
                idMeal : cat.idCategory,
                strMealThumb : cat.strCategoryThumb,
                strMeal : cat.strCategory,
                }
            })
            setMealsByCategoriesComp(mealsByCat);
        }
    },[categoriesMeal]);
    
return (
    <>
        <h1>All categories of meals</h1>
            <section className="row align-items-center g-0"> 
            {mealsByCategoriesComp ? (
                <>
                {mealsByCategoriesComp.map(meal => {
                    return(
                        <MealCard key={'MealCard'+meal.idMeal}  meal={meal} allCat={true} allIng={null}/>
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

export default AllCategory;