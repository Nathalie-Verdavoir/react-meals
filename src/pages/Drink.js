import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import DrinksIngredients from "../components/drinksIngredients";
import SidebarDrinks from "../components/SidebarDrinks";
import { useGetCurrentDrinkQuery } from "../services/drinkApi";
import { setCurrentDrink , setCurrentDrinkLoading , setCurrentDrinkError } from '../slices/currentDrinkSlice';

const Drink = () => {
    const { strDrink } = useParams();
    const { data,  isLoading, isSuccess, isError } = useGetCurrentDrinkQuery(strDrink);
    const dispatch = useDispatch();

    if(isSuccess && data && data.drinks && data.drinks[0])dispatch(setCurrentDrink(data.drinks[0]));
    if(isLoading)dispatch(setCurrentDrinkLoading());
    if(isError)dispatch(setCurrentDrinkError());

    return (
        <>
            <Header/>
            <main>
                {isLoading ? <Loader/> :
                (isSuccess && data && data.drinks && data.drinks[0] ? 
                    (<>
                        {data.drinks[0]? 
                        <article>
                            <div key={data.drinks[0].idDrink} className="card meal flex-grow-1 m-2">
                                 <img className="photo img-fluid rounded" src={data.drinks[0].strDrinkThumb}  alt={data.drinks[0].strDrink}/>
                                <div className="d-flex  flex-wrap flex-md-nowrap  g-0">
                                    <div className="vignette card-body">
                                   
                                        <h3 className="card-title">{data.drinks[0].strDrink}</h3>
                                        <p className="card-text fs-6">{data.drinks[0].strInstructions}</p> 
                                       
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
