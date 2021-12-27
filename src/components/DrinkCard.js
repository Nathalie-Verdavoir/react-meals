import defaultimg from "../img/defaultimg.png";
import RecipeButton from "./RecipeButton";

const DrinkCard = ({drink,allCat,allIng,justDrink}) => {
    const propsButtons = drink => {
        let urlTo;
        let titleButton;
        if(allCat!==null){
            titleButton = allCat ? `All recipes` : `Recipe`;
            urlTo = allCat ? `/categoryDrinks/${drink.strDrink.replaceAll('/','%2F')}` : `/drink/${drink.idDrink}`;
        }
        if(allIng!==null){
            titleButton = allIng ? `All recipes` : `Recipe`;
            urlTo = allIng ? `/ingredientDrinks/${drink.strDrink}` : `/drink/${drink.idDrink}`;
        }
        return (<RecipeButton urlTo={urlTo} titleButton={titleButton}/>)
    } 
    return(
        <article key={drink.idDrink} className="d-flex flex-col justify-content-around  col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card flex-grow-1 m-2">
                {drink.strDrinkThumb ?
                    <img 
                        className="vignette-photo img-fluid rounded"
                        src={drink.strDrinkThumb}
                        onError={(event)=>event.target.setAttribute("src",defaultimg)}
                        alt={drink.strDrink}
                    /> 
                    : (<div></div>)
                }
                <div className="vignette card-body p-2"> 
                            <h5 className="card-title small-card">{drink.strDrink.length>35?(drink.strDrink.slice(0,35) + '...') : drink.strDrink}</h5>
                            {propsButtons(drink)}
                </div>
            </div>
        </article>
    )
}

export default DrinkCard;