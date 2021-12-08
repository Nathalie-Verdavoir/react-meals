import { useState, useEffect } from "react";

const Header = () => {

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
         setCategories(categoriesFromAPI.categories.slice(0,3));
     })()
     }, []);//tableau vide pour initialiser au premier chargement
return (
    <header>
        <ul>
        {categories ?
        <> 
        {categories.map(category => {
            return(
             <li>
                 <p>{category.strCategory}</p>
            </li>
             )
        }
           
        )

    } </> : (
            <p>pas de categories</p>
    )
       
        }
            
        </ul>
    </header>
)
}

export default Header;