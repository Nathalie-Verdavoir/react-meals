
import SidebarDrinksIngredients from "./SidebarDrinksIngredients";
import SidebarDrinksCategories from "./SidebarDrinksCategories.js";
import SidebarDrinksIndex from "./SidebarDrinksIndex";

const SidebarDrinks = () => {
    return (
        <>
            <div className="sidebar col-2">
                <>
                    <SidebarDrinksCategories/>
                    <SidebarDrinksIngredients/>
                    <SidebarDrinksIndex/>
                </>
            </div>
        </>
    ) 
}

export default SidebarDrinks;