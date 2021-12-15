import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Ingredient from './pages/Ingredient';
import Home from './pages/home';
import Meal from './pages/Meal';

function App() {
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

 
  useEffect(() => {
    ( async function (){
      const url = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
      const response = await fetch(url, {
          headers: {
              Accept: "application/json",
          },
          
      });
      const ingredientsFromAPI = await response.json();
      setIngredients(ingredientsFromAPI.meals);
    })();

 ( async function (){
     const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
     const response = await fetch(url, {
         headers: {
             Accept: "application/json",
         },
         
     });
     const categoriesFromAPI = await response.json();
     setCategories(categoriesFromAPI.categories);
 })();

 
 }, []);//tableau vide pour initialiser au premier chargement

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home categories={categories} ingredients={ingredients}/>} />
        <Route path="/category/:strCategory"  element={<Category categories={categories} ingredients={ingredients}/>} />
        <Route path="/ingredient/:strIngredient"  element={<Ingredient categories={categories} ingredients={ingredients}/>} />
        <Route path="/meal/:strMeal"  element={<Meal categories={categories} ingredients={ingredients}/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
