
import SidebarIngredients from "../components/SidebarIngredients";
import SidebarCategories from "./SidebarCategories.js";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <>
                    <SidebarCategories/>
                    <SidebarIngredients/>
                </>
            </div>
        </>
    ) 
}

export default Sidebar;