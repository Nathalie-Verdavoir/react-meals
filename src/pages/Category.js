import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
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
        <Header/>
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
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
            </div>
            <Sidebar />
        </main>  
        <Footer/> 
    </>
) 
}

export default Category;