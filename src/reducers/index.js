import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer';
import mealsByCategoriesReducer from './mealsByCategoriesReducer';
import mealsByIngredientsReducer from './mealsByIngredientsReducer';
import mealsByLetter from "../slices/mealsByLetterSlice";
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrinkReducer from './currentDrinkReducer';
import drinksByCategoriesReducer from "./drinksByCategoriesReducer";
import drinksByIngredientsReducer from "./drinksByIngredientsReducer";
import drinksByLetter from "../slices/drinksByLetterSlice";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer,
    mealsByCategoriesReducer,
    mealsByIngredientsReducer,
    mealsByLetter,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrinkReducer,
    drinksByCategoriesReducer,
    drinksByIngredientsReducer,
    drinksByLetter
})

export default rootReducer