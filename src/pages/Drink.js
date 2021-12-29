import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allActions from "../actions/allActions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import DrinksIngredients from "../components/drinksIngredients";
import SidebarDrinks from "../components/SidebarDrinks";

const Drink = () => {

    const currentDrink = useSelector(state => state.currentDrinkReducer.currentDrink);
    const iscurrentDrinkLoading = useSelector(state => state.currentDrinkReducer.isLoading);
    const dispatch = useDispatch();
    const { strDrink } = useParams();
    useEffect(() => {
        if(currentDrink===null || (currentDrink && !currentDrink[strDrink]  )){
            dispatch(allActions.loadingCurrentDrinkAction());
            ( async function (){
                try {
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+strDrink;
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        }, 
                    });
                    const mealsFromAPI = await response.json();
                    dispatch(allActions.currentDrinkAction(mealsFromAPI.drinks[0]));
                } catch(error) {
                    console.log(error);
                }
            })();
        }
    }, [strDrink,dispatch,currentDrink]);
    return (
        <>
            <Header/>
            <main>
                {iscurrentDrinkLoading ? <Loader/> :
                (currentDrink ? 
                    (<>
                        {currentDrink[strDrink]? 
                        <article>
                            <div key={currentDrink[strDrink].idDrink} className="card meal flex-grow-1 m-2">
                                 <img className="photo img-fluid rounded" src={currentDrink[strDrink].strDrinkThumb}  alt={currentDrink[strDrink].strDrink}/>
                                <div className="d-flex  flex-wrap flex-md-nowrap  g-0">
                                    <div className="vignette card-body">
                                   
                                        <h3 className="card-title">{currentDrink[strDrink].strDrink}</h3>
                                        <p className="card-text fs-6">{currentDrink[strDrink].strInstructions}</p> 
                                       
                                    </div>
                                </div>
                            </div>
                        </article> 
                        : (<article></article>)}
                        <div className="infos">
                            <DrinksIngredients drinkId={strDrink}/>
                        </div>
                    </>
                    ) : (
                    <p>No Recipe</p>
                    )
                )}
            </main>
            <SidebarDrinks/>
            <Footer/>
        </>
    )
};

export default Drink;
