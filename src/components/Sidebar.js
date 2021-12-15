
import SidebarIngredients from "../components/SidebarIngredients";
import SidebarCategories from "./SidebarCategories.js";

const Sidebar = ({categories,ingredients}) => {
return (
    <>
    <div className="sidebar">
        <SidebarCategories categories={categories.slice(0,8)} />
        <SidebarIngredients ingredients={ingredients.slice(0,8)} />
    </div>
    </>
) 
}

export default Sidebar;