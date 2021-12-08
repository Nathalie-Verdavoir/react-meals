import { useState, useEffect } from "react";

const Sidebar = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        ( async function (){
         const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
         const response = await fetch(url, {
             headers: {
                 Accept: "applicaiton/json",
             },
             
         });
         const categoriesFromAPI = await response.json();
         setCategories(categoriesFromAPI.categories);
     })()
     }, []);//tableau vide pour initialiser au premier chargement
return (
    <aside>
        <h1>Toutes les catégories : </h1>
        {categories ?
        <> 
        {categories.map(category => {
            return(
             <article>
                 <p>{category.strCategory}</p>
            </article>
             )
        }
           
        )

    } </> : (
            <p>pas de categories</p>
    )
       
        }
    </aside>
)
}

export default Sidebar;