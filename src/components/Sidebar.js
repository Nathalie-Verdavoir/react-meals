import { Link } from "react-router-dom";

const Sidebar = ({categories}) => {
return (
    <>
    <aside>
        <h1>Toutes les catégories : </h1>
        {categories ?
            <> 
            {categories.map(category => {
                return(
                    <article key={category.idCategory}>
                        <button>
                        <Link to={`/category/${category.strCategory}`}>
                            {category.strCategory}
                        </Link>
                        </button>
                    </article>
                )
            })
            } 
            </> 
            :   
            (
                <p>pas de categories</p>
            )
       }
    </aside>
    </>
) 
}

export default Sidebar;