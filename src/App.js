
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


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />

        <Route path="/homemeals"  element={<HomeMeals/>} />
        <Route path="/category/:strCategory"  element={<Category/>} />
        <Route path="/ingredient/:strIngredient"  element={<Ingredient/>} />
        <Route path="/meal/:strMeal"  element={<Meal/>} />
        <Route path="/meals/:letter"  element={<IndexOfMeals/>} />

        <Route path="/homedrinks"  element={<HomeDrinks/>} />
        <Route path="/categoryDrinks/:strCategory"  element={<CategoryDrinks/>} />
        <Route path="/ingredientDrinks/:strIngredient"  element={<IngredientsDrinks/>} />
        <Route path="/drink/:strDrink"  element={<Drink/>} />
        <Route path="/drinks/:letter"  element={<IndexOfDrinks/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
