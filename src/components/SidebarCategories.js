import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../actions/allActions";
import Loader from "./Loader";

const SidebarCategories = () => {
    const categories = useSelector(state => state.categoriesReducer.categories);
    const isCategoriesLoading = useSelector(state => state.categoriesReducer.isLoading);
    const dispatch = useDispatch();

    useEffect(() => { 
        if(categories===null) {
            dispatch(allActions.loadingCategoriesAction());
            ( async function (){  
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    const categoriesFromAPI = await response.json();
                    dispatch(allActions.categoriesAction(categoriesFromAPI.categories));
                } catch(error) {
                    console.log(error);
                }
            })();
        }
    }, [categories,dispatch]);

    return (
        <>
            <aside className="categories">
                <h3>All categories</h3>
                    {isCategoriesLoading ? <Loader/> :
                        ( categories ?
                            (<> 
                                {categories.slice(0,8).map(category => {
                                    return(
                                        <article key={category.idCategory}>
                                            <Link to={`/category/${category.strCategory}`}>
                                                {category.strCategory}
                                            </Link>
                                        </article>
                                     )
                                })
                            }
                            <article key="allIngredients">
                                <Link to={`/ingredients/all`}>
                                    ...
                                </Link>
                            </article> 
                        </> )
                        :
                        (<p>pas de categories</p>)
                     )
                }
            </aside>
        </>
    )
}


export default SidebarCategories;