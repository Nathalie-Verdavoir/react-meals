import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import DrinkCard from "../components/DrinkCard";
import SidebarDrinks from "../components/SidebarDrinks";

const AllCategoryDrink = () => {
    const [drinksByCategoriesComp, setDrinksByCategoriesComp] = useState([]);
    const { categoriesDrink } = useSelector(state => state.categoriesDrink);

    useEffect (() => {
        if( categoriesDrink!==null){
            const drinksByCat = categoriesDrink.map(cat => {
                return {
                idDrink : cat.strCategory,
                strDrink : cat.strCategory,
                }
            })
            setDrinksByCategoriesComp(drinksByCat);
        }
    },[categoriesDrink]);
    
return (
    <>
        <Header/>
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
                <h1>All categories of drinks</h1>
                    <section className="row align-items-center g-0"> 
                    {drinksByCategoriesComp ? (
                        <>
                        {drinksByCategoriesComp.map(drink => {
                            return(
                                <DrinkCard key={'DrinkCard'+drink.idDrink}  drink={drink} allCat={true} allIng={null}/>
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

export default AllCategoryDrink;