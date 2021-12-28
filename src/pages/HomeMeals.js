import Footer from "../components/Footer";
import Header from "../components/Header";
import RandomMealHome from "../components/RandomMealHome";
import Sidebar from "../components/Sidebar";

const HomeMeals = () => {
    
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
                <section className="col-12 col-md-10">
                <RandomMealHome/>  
                </section>
                <Sidebar/>
            </main>
            
            <Footer/>
        </>
    )
};
export default HomeMeals;
