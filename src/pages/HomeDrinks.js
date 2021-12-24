import { useState , useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecipeButton from "../components/RecipeButton";
import SidebarDrinks from "../components/SidebarDrinks";

const HomeDrinks = () => {
    const [drink, setDrink] = useState(null);
   
    useEffect(() => {
       ( async function (){
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const drinksFromAPI = await response.json();
        setDrink(drinksFromAPI.drinks[0]);
    })();
    
    }, []);//tableau vide pour initialiser au premier chargement
    
    const handleClick = async () => {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
            },
            
        });
        const drinksFromAPI = await response.json();
        setDrink(drinksFromAPI.drinks[0]);
    };
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
                <section className="col-12 col-md-10">
                {drink ? (
                    <article>
                        <button className="btn fs-3 border border-dark m-4 " onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#da8350" className="bi bi-shuffle me-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                            </svg>
                            Random recipe
                        </button>
                        <div key={drink.idDrink} className="card flex-grow-1 m-2">
                            <div className="d-flex  flex-wrap flex-md-nowrap g-0">
                                <img className="photo img-fluid rounded" src={drink.strDrinkThumb}  alt={drink.strDrink}/>
                                <div className="vignette card-body"> 
                                    <h3 className="card-title">{drink.strDrink} ({drink.strAlcoholic})</h3>  
                                    <p className="card-text fs-5">Category : {drink.strCategory}</p>
                                    <p className="card-text fs-5">{drink.strInstructions}</p>
                                    <RecipeButton urlTo={`/drink/${drink.idDrink}`} titleButton={'Recipe'}/>
                                </div>
                            </div>
                        </div>
                    </article>
                ) : (
                    <p>No Recipe</p>
                )}</section>
                <SidebarDrinks/>
            </main>
            
            <Footer/>
        </>
    )
};
export default HomeDrinks;
