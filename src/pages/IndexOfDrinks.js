import { useEffect, useState }  from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';
import SidebarDrinks from '../components/SidebarDrinks';
import { useDispatch, useSelector } from 'react-redux';
import { setDrinksByLetter , setDrinksByLetterLoading , setDrinksByLetterError } from "../slices/drinksByLetterSlice";
import { setCurrentDrink } from '../slices/currentDrinkSlice';

function IndexOfDrinks() {
    const { letter } = useParams();
    const [drinksByIndex, setDrinksByIndex] = useState(null);
    const {drinksByLetter}  = useSelector(state => state.drinksByLetter);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (drinksByLetter && drinksByLetter[letter]){
            setDrinksByIndex(drinksByLetter[letter]);
        }
        else{
            ( async function (){  
                try {
                    dispatch(setDrinksByLetterLoading());
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter;
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                        
                    });
                    const drinksFromAPI = await response.json();
                    setDrinksByIndex(drinksFromAPI.drinks);
                    dispatch(setDrinksByLetter([drinksFromAPI.drinks,letter]));
                    if(drinksFromAPI.drinks.length>0){
                        for(let m=0;m<drinksFromAPI.drinks.length;m++){
                            dispatch(setCurrentDrink(drinksFromAPI.drinks[m]));
                        }
                    }
                } catch(error) {
                    dispatch(setDrinksByLetterError());
                    console.log(error);
                }
            })();
            
        }}, [letter,dispatch,drinksByLetter]);
    
        
    return (
        <>
        <Header/>
        <main className="d-flex col-12">
            <div className="col-12 col-md-10">
                <h1>{`Drinks starting by ${letter.toUpperCase()}`}</h1>
                <section className="row align-items-center g-0"> 
                    {drinksByIndex ? (
                        <>
                        {drinksByIndex
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
            </div>
            <SidebarDrinks/>
        </main>  
        <Footer/>
        </>
    )
}

export default IndexOfDrinks