import { Link } from "react-router-dom";

const Header = ({categories,ingredients}) => {
   // categories=categories.slice(0,3);
return (
    <header>
        <ul className="nav nav-pills nav-fill">
        <li key='home' className="nav-item">
            <Link to='/' className="nav-link fs-1" aria-current="page"><i className="App-logo fas fa-pizza-slice"></i>
                            Home
                        </Link>
                    </li>
        {categories ?

            <> 
            <li  key='drop' className="nav-item dropdown">
                <button className="nav-link dropdown-toggle fs-1" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-x-diamond-fill App-logo" viewBox="0 0 16 16">
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z"/>
</svg>Categories</button>
                <ul className="dropdown-menu">
                {categories.map(category => {
                    return(
                        <li key={category.idCategory} className="nav-item">
                             <Link to={`/category/${category.strCategory}`} className="nav-link fs-5 lh-1 text p-0 m-0" >{category.strCategory}</Link>
                            
                        </li>
                    )
                })
                } 
                </ul>
            </li>
            
            </>
            : 
            (
                <p>pas de categories</p>
            )
        }    


            {ingredients ?

            <> 
            <li  key='drop' className="nav-item dropdown">
                <button className="nav-link dropdown-toggle fs-1" data-bs-toggle="dropdown" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="App-logo bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
</svg>Ingredients</button>
                <ul className="dropdown-menu">
                {ingredients.map(ingredient => {
                    return(
                        <li key={ingredient.idCategory} className="nav-item">
                            <Link to={`/ingredient/${ingredient.strIngredient}`} className="nav-link fs-5 lh-1 text p-0 m-0" >{ingredient.strIngredient}</Link>
                            
                        </li>
                    )
                })
                } 
                </ul>
            </li>

            </>
            : 
            (
                <p>pas d'ingrédient'</p>
            )
            }    
        </ul>
    </header>
)
}

export default Header;