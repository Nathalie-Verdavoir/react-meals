import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoriesDrink , setCategoriesDrinkLoading , setCategoriesDrinkError } from '../slices/categoriesDrinkSlice';
import Loader from "./Loader";

const SidebarDrinksCategories = () => {
    const { categoriesDrink } = useSelector(state => state.categoriesDrink);
    const { isCategoriesDrinkLoading } = useSelector(state => state.categoriesDrink);
    const dispatch = useDispatch();

    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    useEffect(() => { 
        if(categoriesDrink===null) {
            dispatch(setCategoriesDrinkLoading());
            ( async function (){  
                try {
                    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    const categoriesFromAPI = await response.json();
                    dispatch(setCategoriesDrink(categoriesFromAPI.drinks.sort(propComparator('strCategory'))));
                } catch(error) {
                    dispatch(setCategoriesDrinkError());
                    console.log(error);
                }
            })();
        }
    }, [categoriesDrink,dispatch]);

    return (
        <>
            <aside className="categoriesDrinks rounded-3 my-2">
                <h4>All categories</h4>
                    {isCategoriesDrinkLoading ? <Loader/> :
                        ( categoriesDrink ?
                            (<> 
                                {categoriesDrink.slice(0,11).map(category => {
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