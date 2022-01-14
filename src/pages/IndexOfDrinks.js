import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DrinkCard from '../components/DrinkCard';
import { setDrinksByLetter , setDrinksByLetterLoading , setDrinksByLetterError } from "../slices/drinksByLetterSlice";
import { setCurrentDrink } from '../slices/currentDrinkSlice';
import { useGetDrinksByLetterQuery } from '../services/drinkApi';

function IndexOfDrinks() {
    const { letter } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetDrinksByLetterQuery(letter);
    const dispatch = useDispatch();
    
    if(isSuccess && data && data.drinks){
        dispatch(setDrinksByLetter(data.drinks),letter);
        if(data.drinks.length>0){
            for(let m=0;m<data.drinks.length;m++){
                dispatch(setCurrentDrink(data.drinks[m]));
            }
        }
    }
    if(isLoading)dispatch(setDrinksByLetterLoading());
    if(isError)dispatch(setDrinksByLetterError());

    return (
        <>
            <h1>{`Drinks starting by ${letter.toUpperCase()}`}</h1>
            <section className="row align-items-center g-0"> 
                {isSuccess && data && data.drinks ? (
                    <>
                    {data.drinks
                        .map(drink => {
                            return(
                                <DrinkCard key={drink.idDrink}  drink={drink} allCat={false} allIng={null}/>
                            )
                        })
                    }
                    </>   
                ) : (<p>pas de recette</p>)
                }
            </section>
        </>
    )
}

export default IndexOfDrinks