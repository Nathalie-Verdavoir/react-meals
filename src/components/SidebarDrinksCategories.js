import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../actions/allActions";
import Loader from "./Loader";

const SidebarDrinksCategories = () => {
    const categoriesDrinks = useSelector(state => state.categoriesDrinksReducer.categoriesDrinks);
    const isCategoriesLoading = useSelector(state => state.categoriesDrinksReducer.isLoading);
    const dispatch = useDispatch();

    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    useEffect(() => { 
        if(categoriesDrinks===null) {
            dispatch(allActions.loadingCategoriesDrinksAction());
            ( async function (){  
                try {
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    const categoriesFromAPI = await response.json();
                    dispatch(allActions.categoriesDrinksAction(categoriesFromAPI.drinks.sort(propComparator('strCategory'))));
                } catch(error) {
                    dispatch(allActions.onErrorCategoriesDrinksAction());
                    console.log(error);
                }
            })();
        }
    }, [categoriesDrinks,dispatch]);

    return (
        <>
            <aside className="categoriesDrinks rounded-3 my-2">
                <h4>All categories</h4>
                    {isCategoriesLoading ? <Loader/> :
                        ( categoriesDrinks ?
                            (<> 
                                {categoriesDrinks.slice(0,11).map(category => {
                                    return(
                                        <article key={category.strCategory}>
                                            <Link to={`/categoryDrinks/${category.strCategory.replaceAll('/','%2F')}`}>
                                                {category.strCategory}
                                            </Link>
                                        </article>
                                     )
                                })
                            }
                            <article key="allCategoriess">
                                <Link to={`/categoryDrinks/all`}>
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


export default SidebarDrinksCategories;