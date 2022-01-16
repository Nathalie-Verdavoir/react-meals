import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const AllIngredientsDrink = () => {
    const [drinksByIngredientsComp, setDrinksByIngredientsComp] = useState([]);
    const { ingredientsDrink } = useSelector(state => state.ingredientsDrink);
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

    useEffect (() => {
        if( ingredientsDrink!==null){
            const drinksByCat = ingredientsDrink.slice().sort(propComparator('strIngredient1')).map(cat => {
                return {
                idDrink : cat.strIngredient1,
                strDrink : cat.strIngredient1,
                strDrinkThumb : 'https://www.thecocktaildb.com/images/ingredients/'+ cat.strIngredient1+'.png'
                }
            })
            setDrinksByIngredientsComp(drinksByCat);
        }
    },[ingredientsDrink]);
    
return (
    <>
        <h1>All ingredients of drinks</h1>
        <section className="row align-items-center g-0"> 
            {drinksByIngredientsComp ? (
            <>
                    {drinksByIngredientsComp.map(drink => {
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
    </>
) 
}

export default AllIngredientsDrink;