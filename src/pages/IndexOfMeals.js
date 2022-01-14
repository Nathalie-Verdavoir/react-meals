import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import MealCard from '../components/MealCard';
import { useGetMealsByLetterQuery } from '../services/mealApi';
import { setMealsByLetter , setMealsByLetterLoading , setMealsByLetterError } from "../slices/mealsByLetterSlice";
import { setCurrentMeal } from '../slices/currentMealSlice';

function IndexOfMeals() {
    const { letter } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetMealsByLetterQuery(letter);
    const dispatch = useDispatch();

    if(isSuccess && data && data.meals){
        dispatch(setMealsByLetter(data.meals),letter);
        if(data.meals.length>0){
            for(let m=0;m<data.meals.length;m++){
                dispatch(setCurrentMeal(data.meals[m]));
            }
        }
    }
    if(isLoading)dispatch(setMealsByLetterLoading());
    if(isError)dispatch(setMealsByLetterError());

    return (
        <>
            <h1>{`Meals starting by ${letter.toUpperCase()}`}</h1>
            <section className="row align-items-center g-0"> 
                {isSuccess && data && data.meals ? (
                    <>
                    {data.meals.map(meal => {
                        return(
                            <MealCard key={meal.idMeal}  meal={meal} allCat={false} allIng={null}/>
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

export default IndexOfMeals

