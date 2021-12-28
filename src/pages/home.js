import Footer from "../components/Footer";
import Header from "../components/Header";
import { RandomDrinkHome } from "../components/RandomDrinkHome";
import RandomMealHome from "../components/RandomMealHome";
import SidebarCategories from "../components/SidebarCategories";
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
                <section className="col-12 col-md-7 bg-meal p-2 mt-2 mb-2 me-2">
                   <h1>Meals</h1> 
                    <RandomMealHome/>  
                </section>
                <section className="col-12 col-md-3 bg-drink p-2 mt-2 mb-2">
                    <h1>Drinks</h1>
                    <RandomDrinkHome home={"true"}/>  
                </section>
                <section className="col-12 col-md-2 sidebar-home">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Meals
                            </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <SidebarCategories/>
                                <SidebarIngredients/>
                                <SidebarMeals/>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Drinks
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <SidebarDrinksCategories/>
                                <SidebarDrinksIngredients/>
                                <SidebarDrinksIndex/>
                            </div>
                            </div>
                        </div>
                    </div> 
                </section>
            </main>
            
            <Footer/>
        </>
    )
};
export default Home;
