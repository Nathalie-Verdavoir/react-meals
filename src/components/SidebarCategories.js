import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCategoriesMealQuery } from "../services/mealApi";
import { setCategoriesMeal , setCategoriesMealLoading , setCategoriesMealError } from '../slices/categoriesMealSlice';
import Loader from "./Loader";

const SidebarCategories = () => {
    const { categoriesMeal } = useSelector(state => state.categoriesMeal);
    const { isCategoriesMealLoading } = useSelector(state => state.categoriesMeal);
    const { data,  isLoading, isSuccess, isError } = useGetCategoriesMealQuery();
    const dispatch = useDispatch();
    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    if(isSuccess && data && data.categories)dispatch(setCategoriesMeal(data.categories));
    if(isLoading)dispatch(setCategoriesMealLoading());
    if(isError)dispatch(setCategoriesMealError());

    return (
        <>
            <aside className="categories rounded-3 my-2">
                <h4>All categories</h4>
                    {isCategoriesMealLoading ? <Loader/> :
                        ( categoriesMeal ?
                            (<> 
                                {categoriesMeal.slice().sort(propComparator('strCategory')).slice(0,11).map(category => {
                                    return(
                                        <article key={category.idCategory}>
                                            <Link to={`/category/${category.strCategory}`}>
                                                {category.strCategory}
                                            </Link>
                                        </article>
                                     )
                                })
                            }
                            <article key="allCategoriess">
                                <Link to={`/allCategory`}>
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