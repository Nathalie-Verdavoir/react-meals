import categoriesReducer from './categoriesReducer';
import ingredientsReducer from './ingredientsReducer';
import currentMealReducer from './currentMealReducer';
import mealsByCategoriesReducer from './mealsByCategoriesReducer';
import mealsByIngredientsReducer from './mealsByIngredientsReducer';
import categoriesDrinksReducer from './categoriesDrinksReducer';
import ingredientsDrinksReducer from './ingredientsDrinksReducer';
import currentDrinkReducer from './currentDrinkReducer';
import drinksByCategoriesReducer from "./drinksByCategoriesReducer";
import drinksByIngredientsReducer from "./drinksByIngredientsReducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    categoriesReducer,
    ingredientsReducer,
    currentMealReducer,
    mealsByCategoriesReducer,
    mealsByIngredientsReducer,
    categoriesDrinksReducer,
    ingredientsDrinksReducer,
    currentDrinkReducer,
    drinksByCategoriesReducer,
    drinksByIngredientsReducer
})

export default rootReducer