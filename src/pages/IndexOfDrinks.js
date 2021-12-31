import { useEffect, useState }  from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import DrinkCard from '../components/DrinkCard';
import SidebarDrinks from '../components/SidebarDrinks';

function IndexOfDrinks() {
    const { letter } = useParams();
    const [drinksByIndex, setDrinksByIndex] = useState(null);
   
    useEffect(() => {
        ( async function (){  
            try {
                const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+letter;
                const response = await fetch(url, {
                    headers: {
                        Accept: "application/json",
                    },
                    
                });
                const drinksFromAPI = await response.json();
                setDrinksByIndex(drinksFromAPI.drinks);
            } catch(error) {
                //dispatch(allActions.onErrorDrinksByIndexAction());
                console.log(error);
            }
        })();

        }, [letter]);
    
   

    return (
        <>
        <Header/>
        <main className="d-flex col-12">
    <div className="col-12 col-md-10">
    <h1>{`Drinks starting by ${letter.toUpperCase()}`}</h1>
        
        <section className="row align-items-center g-0"> 
            {drinksByIndex ? (
                <>
                {drinksByIndex.map(drink => {
                    return(
                        <DrinkCard key={drink.idDrink}  drink={drink} allCat={false} allIng={null}/>
                        )
                    }
                    )
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