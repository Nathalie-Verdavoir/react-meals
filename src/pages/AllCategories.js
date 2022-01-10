import { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
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
        <Header/>
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
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
            </div>
            <Sidebar />
        </main>  
        <Footer/>
    </>
) 
}

export default AllCategory;