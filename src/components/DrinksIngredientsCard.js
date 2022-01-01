import defaultimg from "../img/defaultimg.png";

export default function DrinksIngredientsCard({ing,qty}) {  
    return (
            <div key={'ingC'+ing} className=" col-12  col-md-6 col-lg-3 g-0 p-2 flex-grow-1">
            <div  className="card flex-grow-1 vignette-ing "> 
             <div className="row col-12  g-0">
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
                    <div className="card-body ing-card">
                    <h5 className="card-title">{`${ing[0].toUpperCase()}${ing.slice(1)}`}</h5>
                    <p className="card-text p-0 m-0 lh-1">{qty} </p>
                </div> 
            </div></div></div></div>
        )
}
