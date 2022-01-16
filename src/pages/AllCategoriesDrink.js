import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const AllCategoryDrink = () => {
    const [drinksByCategoriesComp, setDrinksByCategoriesComp] = useState([]);
    const { categoriesDrink } = useSelector(state => state.categoriesDrink);
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

    useEffect (() => {
        if( categoriesDrink!==null){
            const drinksByCat = categoriesDrink.slice().sort(propComparator('strCategory')).map(cat => {
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
    </>
) 
}

export default AllCategoryDrink;