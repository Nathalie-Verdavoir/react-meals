import Footer from "../components/Footer";
import Header from "../components/Header";
import { RandomDrinkHome } from "../components/RandomDrinkHome";
import RandomMealHome from "../components/RandomMealHome";
import Sidebar from "../components/Sidebar";
import SidebarDrinks from "../components/SidebarDrinks";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
                <section className="col-12 col-md-8">
                <RandomMealHome/>  
                </section>
                <section className="col-12 col-md-8">
                <RandomDrinkHome/>  
                </section>
                <Sidebar/>
                <SidebarDrinks/>
            </main>
            
            <Footer/>
        </>
    )
};
export default Home;
