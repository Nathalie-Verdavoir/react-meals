import { useEffect, useState }  from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions/allActions';
import { setMealsByLetter , setMealsByLetterLoading , setMealsByLetterError } from "../slices/mealsByLetterSlice";

function IndexOfMeals() {
    const { letter } = useParams();
    const [mealsByIndex, setMealsByIndex] = useState(null);
    const {mealsByLetter} = useSelector(state => state.mealsByLetter);
    const dispatch = useDispatch();
    useEffect(() => {
        if (mealsByLetter && mealsByLetter[letter]){
            setMealsByIndex(mealsByLetter[letter]);
        }
        else{
            ( async function (){  
                try {
                    dispatch(setMealsByLetterLoading());
                    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f="+letter;
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                        
                    });
                    const mealsFromAPI = await response.json();
                    setMealsByIndex(mealsFromAPI.meals);
                    dispatch(setMealsByLetter([mealsFromAPI.meals,letter]));
                    if(mealsFromAPI.meals.length>0){
                        for(let m=0;m<mealsFromAPI.meals.length;m++){
                            dispatch(allActions.currentMealAction(mealsFromAPI.meals[m]));
                        }
                    }
                } catch(error) {
                    dispatch(setMealsByLetterError());
                    console.log(error);
                }
            })();

        }}, [letter,dispatch,mealsByLetter]);
   

    return (
        <>
        <Header/>
        <main className="d-flex col-12">
    <div className="col-12 col-md-10">
    <h1>{`Meals starting by ${letter.toUpperCase()}`}</h1>
        
        <section className="row align-items-center g-0"> 
            {mealsByIndex ? (
                <>
                {mealsByIndex.map(meal => {
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
    </div>
    <Sidebar/>
    </main>  
    <Footer/>
        </>
    )
}

export default IndexOfMeals

