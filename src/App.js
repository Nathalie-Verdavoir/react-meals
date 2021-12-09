import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Category from './pages/Category';
import Home from './pages/home';

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
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
        <Route path="/"  element={<Home categories={categories}/>} />
        <Route path="/category/:strCategory"  element={<Category categories={categories}/>} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
