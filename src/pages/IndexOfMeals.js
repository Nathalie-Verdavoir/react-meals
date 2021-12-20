import { useEffect, useState }  from 'react';
import Header from '../components/Header';
import defaultimg from '../img/defaultimg.png'
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import RecipeButton from '../components/RecipeButton';

function IndexOfMeals() {
    const { letter } = useParams();
    const [mealsByIndex, setMealsByIndex] = useState(null);
   
    useEffect(() => {
       ( async function (){
            const url = "https://www.themealdb.com/api/json/v1/1/search.php?f="+letter;
            const response = await fetch(url, {
                headers: {
                    Accept: "application/json",
                },
                
            });
            const mealsFromAPI = await response.json();
            setMealsByIndex(mealsFromAPI.meals);
        })();

        }
    )
   
    const titleButton = `Recipe`;
    const propsButtons = meal => {
        const urlTo = (`/meal/${meal.idMeal}`);
        return (<RecipeButton urlTo={urlTo} titleButton={titleButton}/>)
    } 

    return (
        <>
        <Header/>
        <main className="container w-75 p-3"><h1>{`Meals starting by ${letter.toUpperCase()}`}</h1>
        <section className="row align-items-center g-0"> 
            {mealsByIndex ? (
                <>
                {mealsByIndex.map((meal) => {
                    return(
                        <article key={meal.idMeal} className="d-flex flex-col col-4 p-0 m-0">
                            <div className="card m-2">
                                <div className="row g-0">
                                    <img 
                                    className="vignette-photo img-fluid rounded-start" 
                                    src={meal.strMealThumb}  
                                    onError={(event)=>event.target.setAttribute("src",defaultimg)}
                                    alt={meal.strMeal}/>
                                    <div className="vignette card-body p-2"> 
                                        <h5 className="card-text small-card">{meal.strMeal.length>35?(meal.strMeal.slice(0,35) + '...') : meal.strMeal}</h5>
                                        {propsButtons(meal)}
                                        </div>
                                </div>
                            </div>
                        </article>
                        )
                    }
                    )
                }
                    </>   
                    ) : (<p>pas de recette</p>)
                    }
    </section></main>  
    <Sidebar/>
        </>
    )
}

export default IndexOfMeals

