import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import SidebarDrinks from "../components/SidebarDrinks";
import DrinkCard from "../components/DrinkCard";
import { setDrinksByCategories , setDrinksByCategoriesLoading , setDrinksByCategoriesError } from "../slices/drinksByCategoriesSlice";
import { useGetDrinksByCategoriesQuery } from "../services/drinkApi";

const CategoryDrinks = () => {
    const { strCategory } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetDrinksByCategoriesQuery(strCategory);
    const dispatch = useDispatch();

    if(isSuccess && data && data.drinks)dispatch(setDrinksByCategories([data.drinks,strCategory]));
    if(isLoading)dispatch(setDrinksByCategoriesLoading());
    if(isError)dispatch(setDrinksByCategoriesError());
    
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
            <div className="col-12 col-md-10">
                <h1>{`Recipes of ${strCategory}`}</h1>
                    <section className="row align-items-center g-0"> 
                        {isSuccess && data && data.drinks ? (
                            <>
                            {data.drinks.map(drink => {
                                return(
                                    <DrinkCard key={'DrinkCard'+drink.idDrink}  drink={drink} allIng={null}/>
                                    )
                                }
                                )
                            }
                                </>   
                        ) : (<p>pas de recette</p>)
                        }
                    </section>
                </div>
                <SidebarDrinks />
            </main>
            <Footer/>
        </>
    ) 
}

export default CategoryDrinks;