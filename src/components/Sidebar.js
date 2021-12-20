
import SidebarIngredients from "../components/SidebarIngredients";
import SidebarCategories from "./SidebarCategories.js";
import SidebarMeals from "./SidebarMeals";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
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