import { Link } from "react-router-dom";

const SidebarCategories = ({categories}) => {
return (
    <>
    <aside className="categories">
        <h3>All categories</h3>
        {categories ?
            <> 
            {categories.map(category => {
                return(
                    <article key={category.idCategory}>
                       
                        <Link to={`/category/${category.strCategory}`}>
                            {category.strCategory}
                        </Link>
                        
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
       <article key="allCategories">
                       
                       <Link to={`/category/all`}>
                          ...
                       </Link>
                       
        </article>
    </aside>
    </>
) 
}

export default SidebarCategories;