
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Ingredient from './pages/Ingredient';
import Home from './pages/home';
import Meal from './pages/Meal';
import IndexOfMeals from './pages/IndexOfMeals';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/category/:strCategory"  element={<Category/>} />
        <Route path="/ingredient/:strIngredient"  element={<Ingredient/>} />
        <Route path="/meal/:strMeal"  element={<Meal/>} />
        <Route path="/meals/:letter"  element={<IndexOfMeals/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
