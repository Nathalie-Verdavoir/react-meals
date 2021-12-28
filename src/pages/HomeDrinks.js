import Footer from "../components/Footer";
import Header from "../components/Header";
import { RandomDrinkHome } from "../components/RandomDrinkHome";
import SidebarDrinks from "../components/SidebarDrinks";

const HomeDrinks = () => {
    return (
        <>
            <Header/>
            <main className="d-flex col-12">
                <section className="col-12 col-md-10">
                    <RandomDrinkHome/>
                </section>
                <SidebarDrinks/>
            </main>
            <Footer/>
        </>
    )
};
export default HomeDrinks;
