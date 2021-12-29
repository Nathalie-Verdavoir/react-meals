import { useSelector } from "react-redux";
import Loader from "./Loader";
import defaultimg from "../img/defaultimg.png";


export default function DrinksIngredientsCard({ing,qty}) {
    const ingredientsDrinks = useSelector(state => state.ingredientsDrinksReducer.ingredientsDrinks);
    const isIngredientsLoading = useSelector(state => state.ingredientsDrinksReducer.isLoading);
    
    let el = [];
        for(let i=0;i<ingredientsDrinks.length;i++){ console.log('ok;',(ing.toLowerCase().replace('-',' ')===ingredientsDrinks[i].strIngredient1.toLowerCase().replace('-',' ')));
    if(ing.toLowerCase().replace('-',' ')===ingredientsDrinks[i].strIngredient1.toLowerCase().replace('-',' ')){
      
        el.push (
            <div key={'ingC'+i} className=" col-12  col-md-6 col-lg-3 g-0 p-2 flex-grow-1">
            <div  className="card flex-grow-1 vignette-ing "> 
             <div className="row g-0">
                <div className="col-md-4">
                    <img 
                        src={`https://www.thecocktaildb.com/images/ingredients/${ing}.png`}  
                        onError={(e)=>{ if (e.target.src !== "./img/default.jpg") { 
                                            e.target.onerror = null; e.target.src=defaultimg; 
                                        } 
                                    }
                                }
                        className="vignette-photo-ing img-fluid rounded" 
                        alt={ing}
                    />
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
    

    if(isIngredientsLoading){
        return (<Loader/>)
    }else{
        return el
    }
 
    
}
