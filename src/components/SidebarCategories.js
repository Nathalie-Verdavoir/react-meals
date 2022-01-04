import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoriesMeal , setCategoriesMealLoading , setCategoriesMealError } from '../slices/categoriesMealSlice';
import Loader from "./Loader";

const SidebarCategories = () => {
    const { categoriesMeal } = useSelector(state => state.categoriesMeal);
    const { isCategoriesMealLoading } = useSelector(state => state.categoriesMeal);
    const dispatch = useDispatch();

    const propComparator = (propName) => (a, b) => a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;
    useEffect(() => { 
        if(categoriesMeal===null) {
            dispatch(setCategoriesMealLoading());
            ( async function (){  
                try {
                    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
                    const response = await fetch(url, {
                        headers: {
                            Accept: "application/json",
                        },
                    });
                    const categoriesFromAPI = await response.json();
                    dispatch(setCategoriesMeal(categoriesFromAPI.categories.sort(propComparator('strCategory'))));
                } catch(error) {
                    dispatch(setCategoriesMealError());
                    console.log(error);
                }
            })();
        }
    }, [categoriesMeal,dispatch]);

    return (
        <>
            <aside className="categories rounded-3 my-2">
                <h4>All categories</h4>
                    {isCategoriesMealLoading ? <Loader/> :
                        ( categoriesMeal ?
                            (<> 
                                {categoriesMeal.slice(0,11).map(category => {
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
                                <Link to={`/category/all`}>
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