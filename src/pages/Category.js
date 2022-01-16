import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import MealCard from "../components/MealCard";
import { setMealsByCategories , setMealsByCategoriesLoading , setMealsByCategoriesError } from "../slices/mealsByCategoriesSlice";
import { useGetMealsByCategoriesQuery } from "../services/mealApi";


const Category = () => {
    const { strCategory } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetMealsByCategoriesQuery(strCategory);
    const dispatch = useDispatch();

    if(isSuccess && data && data.meals)dispatch(setMealsByCategories([data.meals,strCategory]));
    if(isLoading)dispatch(setMealsByCategoriesLoading());
    if(isError)dispatch(setMealsByCategoriesError());

    return (
        <>
            <h1>{`Recipes of ${strCategory}`}</h1>
            <section className="row align-items-center g-0"> 
                {isSuccess && data && data.meals ? (
                    <>
                        {data.meals
                            .map(meal => {
                                return(
                                    <MealCard key={'MealCard'+meal.idMeal}  meal={meal} allIng={null}/>
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

export default Category;