import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCategoriesDrinkQuery } from "../services/drinkApi";
import { setCategoriesDrink , setCategoriesDrinkLoading , setCategoriesDrinkError } from '../slices/categoriesDrinkSlice';
import Loader from "./Loader";

const SidebarDrinksCategories = () => {
    const { categoriesDrink } = useSelector(state => state.categoriesDrink);
    const { isCategoriesDrinkLoading } = useSelector(state => state.categoriesDrink);
    const { data,  isLoading, isSuccess, isError } = useGetCategoriesDrinkQuery();
    const dispatch = useDispatch();
    
    if(isSuccess && data && data.drinks)dispatch(setCategoriesDrink(data.drinks));
    if(isLoading)dispatch(setCategoriesDrinkLoading());
    if(isError)dispatch(setCategoriesDrinkError());

    return (
        <>
            <aside className="categoriesDrinks rounded-3 my-2">
                <h4>All categories</h4>
                {isCategoriesDrinkLoading ? <Loader/> :
                    ( categoriesDrink ?
                        (<> 
                            {categoriesDrink.slice(0,11)
                                .map(category => {
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
                                <Link to={`/allCategoryDrink`}>
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