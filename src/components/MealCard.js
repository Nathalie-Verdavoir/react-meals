import defaultimg from "../img/defaultimg.png";
import RecipeButton from "./RecipeButton";

const MealCard = ({meal,allCat,allIng,justMeal}) => {
  
    const propsButtons = meal => {
        let urlTo;
        let titleButton;
        if(allCat!==null){
            titleButton = allCat ? `All recipes` : `Recipe`;
            urlTo = allCat ? `/category/${meal.strMeal}` : `/meal/${meal.idMeal}`;
        }
        if(allIng!==null){
            titleButton = allIng ? `All recipes` : `Recipe`;
            urlTo = allIng ? `/ingredient/${meal.strMeal}` : `/meal/${meal.idMeal}`;
        }
        return (<RecipeButton urlTo={urlTo} titleButton={titleButton}/>)
    } 
    return(
        <article key={meal.idMeal} className="d-flex flex-col justify-content-around  col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="card flex-grow-1 m-2">
                <img 
                    className="vignette-photo img-fluid rounded" 
                    src={meal.strMealThumb}  
                    onError={(event)=>event.target.setAttribute("src",defaultimg)}
                    alt={meal.strMeal}
                />
                <div className="vignette card-body p-2"> 
                            <h5 className="card-title small-card">{meal.strMeal.length>35?(meal.strMeal.slice(0,35) + '...') : meal.strMeal}</h5>
                            {propsButtons(meal)}
                </div>
            </div>
        </article>
    )
}

export default MealCard;