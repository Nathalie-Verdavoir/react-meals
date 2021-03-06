
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Ingredient from './pages/Ingredient';
import Home from './pages/home';
import Meal from './pages/Meal';
import IndexOfMeals from './pages/IndexOfMeals';
import HomeMeals from './pages/HomeMeals';
import HomeDrinks from './pages/HomeDrinks';
import Drink from './pages/Drink';
import IndexOfDrinks from './pages/IndexOfDrinks';
import CategoryDrinks from './pages/CategoryDrinks';
import IngredientsDrinks from './pages/IngredientsDrinks';
import AllCategory from './pages/AllCategories';
import AllCategoryDrink from './pages/AllCategoriesDrink';
import Layout from './components/Layout';
import AllIngredientsDrink from './pages/AllIngredientsDrink';
import AllIngredients from './pages/AllIngredients';


function App() {

  return (
    <BrowserRouter basename="/mealsApp">
      <Layout>
      <Routes>
        <Route path="/"  element={<Home/>} />

        <Route path="/homemeals"  element={<HomeMeals/>} />
        <Route path="/category/:strCategory"  element={<Category/>} />
        <Route path="/allCategory"  element={<AllCategory/>} />
        <Route path="/ingredient/:strIngredient"  element={<Ingredient/>} />
        <Route path="/allIngredients"  element={<AllIngredients/>} />
        <Route path="/meal/:strMeal"  element={<Meal/>} />
        <Route path="/meals/:letter"  element={<IndexOfMeals/>} />

        <Route path="/homedrinks"  element={<HomeDrinks/>} />
        <Route path="/categoryDrinks/:strCategory"  element={<CategoryDrinks/>} />
        <Route path="/allCategoryDrink"  element={<AllCategoryDrink/>} />
        <Route path="/ingredientsDrinks/:strIngredientsDrinks"  element={<IngredientsDrinks/>} />
        <Route path="/allIngredientsDrink"  element={<AllIngredientsDrink/>} />
        <Route path="/drink/:strDrink"  element={<Drink/>} />
        <Route path="/drinks/:letter"  element={<IndexOfDrinks/>} />
      </Routes>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
