import RandomDrinkHome  from "../components/RandomDrinkHome";
import RandomMealHome from "../components/RandomMealHome";

const Home = () => {
    return (
        <>
        <div className="d-flex">
            <section className="col-12 col-md-9 bg-meal p-2 mt-2 mb-2 me-2">
                <h1>Meals</h1> 
                <RandomMealHome/>  
            </section>
            <section className="col-12 col-md-3 bg-drink p-2 mt-2 mb-2">
                <h1>Drinks</h1>
                <RandomDrinkHome home={"true"}/>  
            </section>
        </div>
        </>
    )
};
export default Home;
