import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMeal from '../slices/currentMealSlice';
import mealsByCategories from '../slices/mealsByCategoriesSlice';
import mealsByIngredients from '../slices/mealsByIngredientsSlice';
import mealsByLetter from "../slices/mealsByLetterSlice";
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrink from '../slices/currentDrinkSlice';
import drinksByCategories from "../slices/drinksByCategoriesSlice";
import drinksByIngredients from "../slices/drinksByIngredientsSlice";
import drinksByLetter from "../slices/drinksByLetterSlice";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMeal,
    mealsByCategories,
    mealsByIngredients,
    mealsByLetter,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrink,
    drinksByCategories,
    drinksByIngredients,
    drinksByLetter
})

export default rootReducer