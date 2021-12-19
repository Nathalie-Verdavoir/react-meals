import { useSelector } from "react-redux";
import Loader from "./Loader";


export default function IngredientCard({ing,qty}) {
    const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
    const isIngredientsLoading = useSelector(state => state.ingredientsReducer.isLoading);
    
    if(isIngredientsLoading){
        return (<Loader/>)
    }else{
        for(let i=0;i<ingredients.length;i++){
            if(ing.toLowerCase()===ingredients[i].strIngredient.toLowerCase()){
                return (
                    <div key={'ing'+i} className="row col-3 g-0 p-2">
                    <div  className="card vignette-ing "> 
                     <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://www.themealdb.com/images/ingredients/${ing}.png`} className="vignette-photo-ing img-fluid rounded-start" alt={ing}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{`${ing[0].toUpperCase()}${ing.slice(1)}`}</h5>
                            <p className="card-text p-0 m-0 lh-1">{qty} </p>
                        </div> 
                    </div></div></div></div>
                )
            }
        }
    }
 
    
}
