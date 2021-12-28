import Footer from "../components/Footer";
import Header from "../components/Header";
import { RandomDrinkHome } from "../components/RandomDrinkHome";
import RandomMealHome from "../components/RandomMealHome";
import Sidebar from "../components/Sidebar";
import SidebarCategories from "../components/SidebarCategories";
import SidebarDrinks from "../components/SidebarDrinks";
import SidebarDrinksCategories from "../components/SidebarDrinksCategories";
import SidebarDrinksIndex from "../components/SidebarDrinksIndex";
import SidebarDrinksIngredients from "../components/SidebarDrinksIngredients";
import SidebarIngredients from "../components/SidebarIngredients";
import SidebarMeals from "../components/SidebarMeals";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
                <section className="col-12 col-md-7 bg-meal p-3">
                    <h1>Meals</h1>
                    <RandomMealHome/>  
                </section>
                <section className="col-12 col-md-3 bg-drink p-3">
                    <h1>Drinks</h1>
                    <RandomDrinkHome/>  
                </section>
                <section className="col-12 col-md-2">
                    <SidebarCategories/>
                    <SidebarIngredients/>
                    <SidebarMeals/>
                    <SidebarDrinksCategories/>
                    <SidebarDrinksIngredients/>
                    <SidebarDrinksIndex/>
                </section>
            </main>
            
            <Footer/>
        </>
    )
};
export default Home;
