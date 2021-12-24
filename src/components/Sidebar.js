
import SidebarIngredients from "../components/SidebarIngredients";
import SidebarCategories from "./SidebarCategories.js";
import SidebarMeals from "./SidebarMeals";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar col-2">
                <>
                    <SidebarCategories/>
                    <SidebarIngredients/>
                    <SidebarMeals/>
                </>
            </div>
        </>
    ) 
}

export default Sidebar;