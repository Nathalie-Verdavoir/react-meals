import { Link } from "react-router-dom";

const Header = () => {

return (
    <header>
        
        <nav className="nav nav-pills navbar navbar-expand-lg">
       <div className="container-fluid">
            <li key='home' className="nav-item">
                <Link to='/' className="nav-link  btn-lg" aria-current="page">
                  <h1>  <i className="App-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-diamond-fill App-logo" viewBox="0 0 16 16">
                            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
                        </svg>
                    </i>
                    Home</h1>
                </Link>
            </li> 
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(255, 96, 4)" className="bi bi-list navbar-toggler-icon" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
  </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <li  key='dropMeals' className="nav-item dropdown">
                    <> 
                       <h1> 
                           <button  className="nav-link dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                Meals
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                       
                            <ul className="dropdown-menu">
                                <li key="mealRandomHeader" className="nav-item">
                                    <Link to="/HomeMeals" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        Random Meal recipe
                                    </Link>
                                </li>
                                <li key="catAllHeader" className="nav-item">
                                    <Link to="/allCategory" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        All Categories of Meals
                                    </Link>
                                </li>
                                <li key="ingAllHeader" className="nav-item">
                                    <Link to="/allIngredients" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        Ingredients of Meals
                                    </Link>
                                </li>
                            </ul>
                        </h1>
                    </>
                </li>
                <li  key='dropDrinks' className="nav-item dropdown">
                    <> 
                        <h1>
                            <button  className="nav-link dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                                Drinks
                                <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li key="drinkRandomHeader" className="nav-item">
                                    <Link to="/HomeDrinks" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        Random Drink recipe
                                    </Link>
                                </li>
                                <li key="catDrinksAllHeader" className="nav-item">
                                    <Link to="/allCategoryDrink" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        All Categories of Drinks
                                    </Link>
                                </li>
                                <li key="ingDrinksAllHeader" className="nav-item">
                                    <Link to="/allIngredientsDrink" className="nav-link fs-5 lh-1 text p-0 m-0" >
                                        Ingredients of Drinks
                                    </Link>
                                </li>
                            </ul>
                        </h1>
                    </>
                </li>
                </div>
            </div></div>
            </nav>
    </header>
)
}

export default Header;